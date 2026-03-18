export const ADMIN_EMAIL_WHITELIST = new Set(
  [
    "nishtharaima6125@gmail.com",
    "teamtheailearning@gmail.com",
  ].map((e) => e.trim().toLowerCase())
);

export function isAdminEmailAllowed(email: string | null | undefined): boolean {
  const normalized = (email ?? "").trim().toLowerCase();
  if (!normalized) return false;
  return ADMIN_EMAIL_WHITELIST.has(normalized);
}

