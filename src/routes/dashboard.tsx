import { createFileRoute, redirect, useRouter } from '@tanstack/react-router';
import { fetchContactsFn, checkAuthFn, logoutFn } from '@/contactsApi';
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { LogOut } from 'lucide-react';

export const Route = createFileRoute('/dashboard')({
  beforeLoad: async () => {
    const isAuthenticated = await checkAuthFn();
    if (!isAuthenticated) {
      throw redirect({ to: '/login' });
    }
  },
  loader: async () => {
    const contacts = await fetchContactsFn();
    return { contacts };
  },
  component: DashboardPage,
});

function DashboardPage() {
  const { contacts } = Route.useLoaderData();
  const router = useRouter();

  const handleLogout = async () => {
    await logoutFn();
    router.invalidate();
    router.navigate({ to: '/' });
  };

  return (
    <Layout>
      <PageHero eyebrow="Admin Only" title="Contact Submissions" subtitle="View all enquiries from the contact form." />
      <div className="container-page py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-display">Dashboard</h2>
          <button onClick={handleLogout} className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
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
