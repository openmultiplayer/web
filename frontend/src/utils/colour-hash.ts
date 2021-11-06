export const generateColour = (str: string, highlight = false): string => {
  const hue: number =
    str.split("").reduce((p, c) => c.charCodeAt(0) + ((p << 9) - p), 0) % 360;
  return `hsl(${hue}, 85%, ${highlight ? "80%" : "75%"})`;
};
