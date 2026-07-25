/**
 * Robust clipboard copy with a fallback for browsers/contexts where the async
 * Clipboard API is unavailable or blocked (older mobile Safari, non-secure
 * contexts, permission denied).
 */
export async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fall through to the legacy path
  }
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    ta.setAttribute('readonly', '');
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

/** Full shareable URL to a room, preserving the app's base path (e.g. /dixit/). */
export function roomLink(roomCode: string): string {
  return `${window.location.origin}${window.location.pathname}?room=${roomCode}`;
}
