import { createFileRoute, redirect, useRouter } from '@tanstack/react-router';
import { fetchContactsFn, checkAuthFn, logoutFn } from '@/contactsApi';
import { LogOut, Inbox, LayoutDashboard, Search, Bell } from 'lucide-react';
import { useState } from 'react';

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
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogout = async () => {
    await logoutFn();
    document.cookie = "adminAuth=; path=/; max-age=0";
    window.location.href = '/';
  };

  const filteredContacts = contacts.filter(c => 
    c.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.phone.includes(searchTerm)
  );

  return (
    <div className="flex h-screen w-full bg-muted/30 overflow-hidden font-sans text-foreground">
      {/* Sidebar */}
      <aside className="w-64 bg-background border-r border-border/50 flex flex-col hidden md:flex z-10 shadow-sm">
        <div className="h-16 flex items-center px-6 border-b border-border/50">
          <h1 className="font-display text-xl text-primary font-bold tracking-tight">Shreevallabh Admin</h1>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 bg-primary/10 text-primary rounded-lg font-medium transition-colors">
            <Inbox className="w-5 h-5" />
            Submissions
          </a>
          <a href="/" target="_blank" className="flex items-center gap-3 px-3 py-2.5 text-muted-foreground hover:bg-secondary/50 hover:text-foreground rounded-lg font-medium transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            View Website
          </a>
        </nav>
        <div className="p-4 border-t border-border/50">
          <button onClick={handleLogout} className="flex items-center gap-3 px-3 py-2.5 w-full text-muted-foreground hover:bg-red-50 hover:text-red-600 rounded-lg font-medium transition-colors">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Header */}
        <header className="h-16 bg-background/80 backdrop-blur-md border-b border-border/50 flex items-center justify-between px-6 z-10 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input 
                type="text"
                placeholder="Search submissions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 w-64 md:w-80 rounded-full border border-border/50 bg-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-muted-foreground hover:bg-secondary rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-background"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-semibold text-sm border border-primary/30">
              A
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto p-6 md:p-8">
          <div className="mb-6 flex justify-between items-end">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Contact Submissions</h2>
              <p className="text-muted-foreground mt-1">Manage inquiries from your website visitors.</p>
            </div>
            <div className="text-sm text-muted-foreground font-medium bg-background px-3 py-1 rounded-full border border-border/50 shadow-sm">
              Total: {contacts.length}
            </div>
          </div>

          <div className="bg-background rounded-xl border border-border/50 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b border-border/50">
                  <tr>
                    <th className="px-6 py-4 font-semibold tracking-wider">Name & Date</th>
                    <th className="px-6 py-4 font-semibold tracking-wider">Contact Details</th>
                    <th className="px-6 py-4 font-semibold tracking-wider">Concern</th>
                    <th className="px-6 py-4 font-semibold tracking-wider">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {filteredContacts.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-muted-foreground">
                        No submissions found matching your search.
                      </td>
                    </tr>
                  ) : (
                    filteredContacts.map((c) => (
                      <tr key={c.id} className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4 align-top">
                          <div className="font-medium text-foreground">{c.fullName}</div>
                          <div className="text-xs text-muted-foreground mt-1">{new Date(c.createdAt).toLocaleDateString()} at {new Date(c.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                        </td>
                        <td className="px-6 py-4 align-top space-y-1">
                          <div>
                            <a href={`tel:${c.phone}`} className="text-primary hover:underline">{c.phone}</a>
                          </div>
                          <div className="text-muted-foreground">
                            {c.email ? <a href={`mailto:${c.email}`} className="hover:text-primary transition-colors">{c.email}</a> : "No email"}
                          </div>
                        </td>
                        <td className="px-6 py-4 align-top">
                          {c.concern ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border/50">
                              {c.concern}
                            </span>
                          ) : (
                            <span className="text-muted-foreground text-xs">-</span>
                          )}
                        </td>
                        <td className="px-6 py-4 align-top max-w-xs">
                          {c.message ? (
                            <p className="text-muted-foreground text-sm line-clamp-3" title={c.message}>{c.message}</p>
                          ) : (
                            <span className="text-muted-foreground text-xs italic">No message provided</span>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
