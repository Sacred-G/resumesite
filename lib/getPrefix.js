export default function getVendorPrefix(): string {
  // Checking specifically for 'window.document' is for pseudo-browser server-side
  // environments that define 'window' as the global context.
  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
  if (typeof window === 'undefined' || typeof window.document === 'undefined') {
    return '';
  }

  const prefixes = ['Moz', 'Webkit', 'O', 'ms'];
  const style = window.document.documentElement.style;

  if ('transform' in style) {
    return '';
  }

  for (const prefix of prefixes) {
    if (prefix + 'Transform' in style) {
      return prefix;
    }
  }

  return '';
}
