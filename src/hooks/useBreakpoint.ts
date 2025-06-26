import { useMediaQuery } from "usehooks-ts";

export function useBreakpoint() {
  const isXLarge = useMediaQuery("(min-width: 1360px)");
  const isLarge = useMediaQuery("(min-width: 730px)");
  const isMedium = useMediaQuery("(min-width: 590px)");
  const isSmall = useMediaQuery("(min-width: 500px)");

  if (isXLarge) return "xl";
  if (isLarge) return "lg";
  if (isMedium) return "md";
  if (isSmall) return "sm";
  return "xsm";
}
