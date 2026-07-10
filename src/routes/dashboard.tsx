import { createFileRoute } from '@tanstack/react-router';
import { fetchContactsFn } from '@/server/contacts';
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { useState, useEffect } from 'react';
import { Card3D } from '@/components/site/Card3D';

export const Route = createFileRoute('/dashboard')({
  loader: async () => {
    const contacts = await fetchContactsFn();
    return { contacts };
  },
  component: DashboardPage,
});

function DashboardPage() {
  const { contacts } = Route.useLoaderData();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("adminAuth") === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "shreevallabh" && password === "shreevallabh@2026") {
      setIsLoggedIn(true);
      sessionStorage.setItem("adminAuth", "true");
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  if (!isLoggedIn) {
    return (
      <Layout>
        <div className="container-page py-24 flex justify-center items-center min-h-[60vh]">
          <Card3D className="p-8 w-full max-w-md">
            <h2 className="font-display text-3xl mb-2 text-primary">Admin Login</h2>
            <p className="text-muted-foreground text-sm mb-6">Please sign in to view the dashboard.</p>
            <form onSubmit={handleLogin} className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium">Username</span>
                <input required value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Password</span>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
              </label>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button type="submit" className="btn-primary w-full mt-4">Sign In</button>
            </form>
          </Card3D>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHero eyebrow="Admin Only" title="Contact Submissions" subtitle="View all enquiries from the contact form." />
      <div className="container-page py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map((c) => (
            <div key={c.id} className="card-3d p-6 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4 gap-2">
                <div>
                  <h3 className="font-semibold text-lg text-primary">{c.fullName}</h3>
                  <p className="text-xs text-muted-foreground">{new Date(c.createdAt).toLocaleString()}</p>
                </div>
                {c.concern && (
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium max-w-[120px] truncate" title={c.concern}>
                    {c.concern}
                  </span>
                )}
              </div>
              <div className="space-y-1 mb-4 text-sm flex-1">
                <p><strong>Phone:</strong> <a href={`tel:${c.phone}`} className="hover:text-gold transition-colors">{c.phone}</a></p>
                <p><strong>Email:</strong> {c.email ? <a href={`mailto:${c.email}`} className="hover:text-gold transition-colors">{c.email}</a> : "N/A"}</p>
              </div>
              {c.message && (
                <div className="bg-secondary/20 p-3 rounded-lg text-sm mt-auto border border-border">
                  <p className="italic text-muted-foreground">"{c.message}"</p>
                </div>
              )}
            </div>
          ))}
          {contacts.length === 0 && (
            <div className="col-span-full py-12 text-center text-muted-foreground border-2 border-dashed border-border rounded-xl">
              No submissions yet. Wait for users to fill the contact form.
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
