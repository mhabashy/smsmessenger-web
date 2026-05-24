export function normalizePhoneNumber(value: string | undefined | null) {
  const rawValue = (value ?? "").trim();
  if (!rawValue) {
    return "";
  }

  const digits = rawValue.replace(/\D/g, "");
  if (!digits) {
    return "";
  }

  if (rawValue.startsWith("+") || digits.length >= 11) {
    return `+${digits}`;
  }

  return digits;
}

export function isValidPhoneNumber(value: string | undefined | null) {
  return /^\+?[1-9]\d{7,14}$/.test(normalizePhoneNumber(value));
}
