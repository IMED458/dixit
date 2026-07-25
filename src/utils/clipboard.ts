/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Copy text to the clipboard, robust across mobile / in-app webviews.
 *
 * The async Clipboard API (`navigator.clipboard`) is only available in secure
 * contexts and is blocked or missing in many mobile in-app browsers, so we fall
 * back to the legacy `execCommand('copy')` textarea trick. Returns whether the
 * copy actually succeeded so callers only show a success state on success.
 */
export async function copyText(text: string): Promise<boolean> {
  // Preferred path: async Clipboard API (needs a secure context).
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Fall through to the legacy approach below.
  }

  // Legacy fallback: works in insecure contexts and most mobile webviews.
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    // Keep it out of view but still focusable/selectable on mobile.
    ta.style.position = 'fixed';
    ta.style.top = '0';
    ta.style.left = '0';
    ta.style.width = '1px';
    ta.style.height = '1px';
    ta.style.padding = '0';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    ta.setSelectionRange(0, ta.value.length); // iOS Safari needs the explicit range.
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
