// Los dos arcos y el círculo de luz del logo «Abrazo», trazados en SVG para
// usarlos como ilustración a gran tamaño. El logo oficial sigue siendo
// public/brand/luyasi-symbol.png; esto es una interpretación, no el logo.
export const LEFT_ARC =
  "M590 270C605 300 585 320 560 340C470 410 425 470 430 540C435 620 500 670 575 715C615 740 625 785 585 805C545 820 500 810 455 790C360 745 300 650 300 545C300 410 400 310 545 255C570 245 590 252 590 270Z";
export const RIGHT_ARC =
  "M650 200C680 185 720 190 760 205C880 255 955 400 955 545C955 680 880 770 760 805C700 822 655 812 645 790C635 765 655 740 690 720C780 670 825 620 825 525C825 420 760 340 680 280C645 255 625 225 650 200Z";
export const VIEWBOX = "280 170 700 670";

export function AbrazoMark({
  size = 40,
  title,
  light = true,
}: {
  size?: number;
  title?: string;
  light?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={VIEWBOX}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      className="abrazo-mark"
    >
      {title ? <title>{title}</title> : null}
      <path d={LEFT_ARC} fill="var(--terracotta)" />
      <path d={RIGHT_ARC} fill="var(--arc-plum)" />
      {light ? <circle cx="627" cy="543" r="90" fill="var(--amber)" /> : null}
    </svg>
  );
}
