import { createServerFn } from "@tanstack/react-start";
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
