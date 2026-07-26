/** Returns the longest shared prefix across all values. */
export function commonPrefix(values: readonly string[]): string {
  if (values.length === 0) return "";
  let candidate = values[0] as string;
  for (let item = 1; item < values.length && candidate.length > 0; item += 1) {
    const value = values[item] as string;
    while (!value.startsWith(candidate)) {
      candidate = candidate.slice(0, -1);
    }
  }
  return candidate;
}
