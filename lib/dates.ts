/**
 * Format an ISO date string in Sydney time, e.g. "Sun 12 Jul 2026, 2:00pm AEST".
 * Computed locally so the display string can never drift from the ISO date
 * (the LLM is not trusted to do timezone conversion).
 */
export function formatSydney(iso: string): string {
  const date = new Date(iso);
  if (isNaN(date.getTime())) return iso;

  const parts = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Sydney",
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
  }).formatToParts(date);

  const get = (type: string) =>
    parts.find((p) => p.type === type)?.value ?? "";

  const time = `${get("hour")}:${get("minute")}${get("dayPeriod").toLowerCase()}`;
  const month = get("month").slice(0, 3);
  return `${get("weekday")} ${get("day")} ${month} ${get("year")}, ${time} ${get("timeZoneName")}`;
}
