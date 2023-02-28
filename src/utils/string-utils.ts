export function lowerCase(str: string): string {
  return str.toLocaleLowerCase();
}

export function upperCase(str: string): string {
  return str.toUpperCase();
}

export function dashToUnderscore(str) {
  return str.replace(/-/g, '_');
}
