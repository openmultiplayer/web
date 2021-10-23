import { formatRelative } from "date-fns";
import { enGB } from "date-fns/locale";

export const niceDate = (d: string): string =>
  formatRelative(new Date(d), new Date(), { locale: enGB });
