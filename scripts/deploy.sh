#!/usr/bin/env bash
# Publica el sitio en luyasi.com: compila, sube a S3 y limpia la caché de
# CloudFront. El bucket y la distribución salen de la pila Luyasi-domain
# (repo Luyasi-App, infra/lib/domain-stack.ts).
#
# Uso: AWS_PROFILE=luyasi scripts/deploy.sh
set -euo pipefail
cd "$(dirname "$0")/.."

output() {
  aws cloudformation describe-stacks --region us-east-1 --stack-name Luyasi-domain \
    --query "Stacks[0].Outputs[?OutputKey=='$1'].OutputValue" --output text
}
bucket=$(output SiteBucket)
distribution=$(output SiteDistributionId)

npm run check
npm run build

# Archivos con huella en el nombre: caché de un año.
aws s3 sync out/_next/static "s3://$bucket/_next/static" --delete \
  --cache-control "public, max-age=31536000, immutable"
# Páginas y datos de navegación: siempre la versión nueva.
aws s3 sync out "s3://$bucket" --delete --exclude "_next/static/*" \
  --exclude "*" --include "*.html" --include "*.txt" \
  --cache-control "public, max-age=0, must-revalidate"
# El resto (imágenes, íconos, sitemap): un día.
aws s3 sync out "s3://$bucket" --delete --exclude "_next/static/*" \
  --exclude "*.html" --exclude "*.txt" \
  --cache-control "public, max-age=86400"

aws cloudfront create-invalidation --distribution-id "$distribution" --paths "/*" \
  --query Invalidation.Id --output text
echo "Publicado en https://luyasi.com"
