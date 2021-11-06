import { getLuminance } from "polished";

export const generateColour = (str: string, highlight = false): string => {
  const hue: number = Math.abs(
    str.split("").reduce((p, c) => c.charCodeAt(0) + ((p << 9) - p), 0) % 360
  );
  return `hsl(${hue}, 85%, ${highlight ? "90%" : "75%"})`;
};

export const alternativeColour = (c: string): string => {
  const l = getLuminance(c);
  if (l >= 0.7) {
    return "var(--chakra-colors-gray-700)";
  } else {
    return "var(--chakra-colors-gray-50)";
  }
};
