const UNIT_STEPS = [
  ["year", 365 * 24 * 60 * 60],
  ["month", 30 * 24 * 60 * 60],
  ["day", 24 * 60 * 60],
  ["hour", 60 * 60],
  ["minute", 60],
] as const;

type TimeUnit = (typeof UNIT_STEPS)[number][0];

const ENGLISH_UNITS: Record<TimeUnit, [singular: string, plural: string]> = {
  year: ["year", "years"],
  month: ["month", "months"],
  day: ["day", "days"],
  hour: ["hour", "hours"],
  minute: ["minute", "minutes"],
};

const formatters = new Map<string, Intl.NumberFormat>();

let unitStyleSupport: boolean | undefined;

function supportsUnitStyle(): boolean {
  if (unitStyleSupport === undefined) {
    try {
      unitStyleSupport =
        new Intl.NumberFormat("en", {
          style: "unit",
          unit: "hour",
          unitDisplay: "long",
        }).format(1) === "1 hour";
    } catch {
      unitStyleSupport = false;
    }
  }

  return unitStyleSupport;
}

function resolveLocale(locale: string): string {
  try {
    const [supported] = Intl.NumberFormat.supportedLocalesOf([locale]);
    return supported ?? "en";
  } catch {
    return "en";
  }
}

function getUnitFormatter(
  locale: string,
  unit: TimeUnit,
): Intl.NumberFormat | undefined {
  if (!supportsUnitStyle()) {
    return undefined;
  }

  const resolved = resolveLocale(locale);
  const cacheKey = `${resolved}|${unit}`;
  const cached = formatters.get(cacheKey);

  if (cached) {
    return cached;
  }

  const formatter = new Intl.NumberFormat(resolved, {
    style: "unit",
    unit,
    unitDisplay: "long",
    maximumFractionDigits: 0,
  });

  formatters.set(cacheKey, formatter);
  return formatter;
}

function formatEnglishUnit(value: number, unit: TimeUnit): string {
  const [singular, plural] = ENGLISH_UNITS[unit];
  return `${value} ${value === 1 ? singular : plural}`;
}

export function formatElapsed(
  locale: string,
  timestamp: number,
  now: number,
): string {
  const seconds = Math.max(0, Math.round((now - timestamp) / 1000));
  const parts: string[] = [];
  let remaining = seconds;

  for (const [unit, size] of UNIT_STEPS) {
    const value = Math.floor(remaining / size);
    remaining -= value * size;

    if (value === 0) {
      continue;
    }

    parts.push(
      getUnitFormatter(locale, unit)?.format(value) ??
        formatEnglishUnit(value, unit),
    );

    if (parts.length === 3) {
      break;
    }
  }

  if (parts.length === 0) {
    return (
      getUnitFormatter(locale, "minute")?.format(1) ??
      formatEnglishUnit(1, "minute")
    );
  }

  try {
    return new Intl.ListFormat(resolveLocale(locale), {
      style: "long",
      type: "unit",
    }).format(parts);
  } catch {
    return parts.join(" ");
  }
}
