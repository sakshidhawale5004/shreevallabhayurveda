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

const isDemoMode = HOSTINGER_API_URL.includes("your-hostinger-domain");

export const fetchContactsFn = async () => {
  const token = getAuthToken();
  if (!token) throw new Error("Unauthorized");

  if (isDemoMode) {
    const local = localStorage.getItem("demo_contacts");
    return local ? JSON.parse(local) : [];
  }

  const res = await fetch(`${HOSTINGER_API_URL}?action=get_contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  
  if (!res.ok) throw new Error("Failed to fetch contacts");
  return res.json();
};

export const submitContactFn = async ({ data }: { data: Omit<ContactSubmission, "id" | "createdAt"> }) => {
  if (isDemoMode) {
    const newContact = { ...data, id: Date.now().toString(), createdAt: new Date().toISOString() };
    const local = localStorage.getItem("demo_contacts");
    const contacts = local ? JSON.parse(local) : [];
    contacts.unshift(newContact);
    localStorage.setItem("demo_contacts", JSON.stringify(contacts));
    return { success: true };
  }

  const res = await fetch(`${HOSTINGER_API_URL}?action=submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  
  if (!res.ok) throw new Error("Failed to submit contact");
  return res.json();
};

export const loginFn = async ({ data }: { data: { username: string; password: string } }) => {
  if (isDemoMode) {
    if (data.username === 'shreevallabh' && data.password === 'shreevallabh@2026') {
      return { success: true, token: "demo_admin_token_2026" };
    }
    throw new Error("Invalid username or password");
  }

  try {
    const res = await fetch(`${HOSTINGER_API_URL}?action=login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    
    if (!res.ok) throw new Error("Invalid username or password");
    return res.json();
  } catch (err) {
    throw new Error("Could not connect to Hostinger backend. Please check your domain setup.");
  }
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
