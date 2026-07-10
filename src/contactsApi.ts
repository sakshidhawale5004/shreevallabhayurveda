import { createServerFn } from "@tanstack/react-start";
import { getCookie, setCookie, deleteCookie } from '@tanstack/react-start/server';
import { promises as fs } from "fs";
import path from "path";


const dataFile = path.resolve(process.cwd(), "contacts.json");

export interface ContactSubmission {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  concern: string;
  message: string;
  createdAt: string;
}

// Ensure the file exists
async function getContacts(): Promise<ContactSubmission[]> {
  try {
    const data = await fs.readFile(dataFile, "utf-8");
    return JSON.parse(data);
  } catch (err: any) {
    if (err.code === "ENOENT") {
      return [];
    }
    throw err;
  }
}

export const fetchContactsFn = createServerFn({ method: "GET" }).handler(async () => {
  return await getContacts();
});

export const submitContactFn = createServerFn({ method: "POST" })
  .validator((data: Omit<ContactSubmission, "id" | "createdAt">) => data)
  .handler(async ({ data }) => {
    const contacts = await getContacts();
    const newContact: ContactSubmission = {
      id: crypto.randomUUID(),
      fullName: data.fullName,
      phone: data.phone,
      email: data.email || "",
      concern: data.concern || "",
      message: data.message || "",
      createdAt: new Date().toISOString(),
    };
    
    contacts.push(newContact);
    await fs.writeFile(dataFile, JSON.stringify(contacts, null, 2), "utf-8");
    return { success: true };
  });

export const loginFn = createServerFn({ method: "POST" })
  .validator((data: { username: string; password: string }) => data)
  .handler(async ({ data }) => {
    if (data.username === "shreevallabh" && data.password === "shreevallabh@2026") {
      setCookie("adminAuth", "true", { 
        httpOnly: true, 
        secure: true, 
        sameSite: "lax",
        path: "/", 
        maxAge: 60 * 60 * 24 * 7 
      });
      return { success: true };
    }
    throw new Error("Invalid username or password");
  });

export const checkAuthFn = createServerFn({ method: "POST" }).handler(async () => {
  const authCookie = getCookie("adminAuth");
  return authCookie === "true";
});

export const logoutFn = createServerFn({ method: "POST" }).handler(async () => {
  setCookie("adminAuth", "", { httpOnly: true, path: "/", maxAge: 0 });
  return { success: true };
});
