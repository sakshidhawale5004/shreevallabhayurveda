// To make the dashboard work with Hostinger's PHP, we use standard fetch calls instead of Node.js createServerFn.

// IMPORTANT: Replace this with your actual Hostinger domain name!
export const HOSTINGER_API_URL = "https://your-hostinger-domain.com/api.php";

export interface ContactSubmission {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  concern: string;
  message: string;
  createdAt: string;
}

// Helper to get auth token from cookie
function getAuthToken() {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(/(^| )adminAuthToken=([^;]+)/);
  if (match) return match[2];
  return null;
}

export const fetchContactsFn = async () => {
  const token = getAuthToken();
  if (!token) throw new Error("Unauthorized");

  const res = await fetch(`${HOSTINGER_API_URL}?action=get_contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  
  if (!res.ok) throw new Error("Failed to fetch contacts");
  return res.json();
};

export const submitContactFn = async ({ data }: { data: Omit<ContactSubmission, "id" | "createdAt"> }) => {
  const res = await fetch(`${HOSTINGER_API_URL}?action=submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  
  if (!res.ok) throw new Error("Failed to submit contact");
  return res.json();
};

export const loginFn = async ({ data }: { data: { username: string; password: string } }) => {
  const res = await fetch(`${HOSTINGER_API_URL}?action=login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  
  if (!res.ok) throw new Error("Invalid username or password");
  return res.json();
};

export const checkAuthFn = async () => {
  return !!getAuthToken();
};

export const logoutFn = async () => {
  if (typeof document !== 'undefined') {
    document.cookie = "adminAuthToken=; path=/; max-age=0";
    document.cookie = "adminAuth=; path=/; max-age=0";
  }
  return { success: true };
};
