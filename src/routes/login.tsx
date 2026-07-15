import { createFileRoute, useNavigate, useRouter } from '@tanstack/react-router';
import { Layout } from "@/components/site/Layout";
import { Card3D } from '@/components/site/Card3D';
import { useState } from 'react';
import { loginFn } from '@/contactsApi';

export const Route = createFileRoute('/login')({
  component: LoginPage,
});

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await loginFn({ data: { username, password } });
      if (res.success) {
        document.cookie = `adminAuthToken=${res.token}; path=/; max-age=604800`;
        navigate({ to: "/dashboard" });
      }
    } catch (err: any) {
      setError(err.message || "Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30 p-4">
      <Card3D className="p-8 w-full max-w-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-gold"></div>
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl text-primary font-bold">Admin Portal</h2>
          <p className="text-muted-foreground text-sm mt-2">Secure access for authorized personnel</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-foreground/80 mb-1.5">Username</label>
            <input 
              required 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className="w-full rounded-lg border border-border/50 bg-background/50 px-4 py-2.5 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-muted-foreground/50 backdrop-blur-sm" 
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground/80 mb-1.5">Password</label>
            <input 
              type="password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full rounded-lg border border-border/50 bg-background/50 px-4 py-2.5 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-muted-foreground/50 backdrop-blur-sm" 
              placeholder="••••••••"
            />
          </div>
          
          {error && (
            <div className="bg-red-500/10 text-red-600 text-sm p-3 rounded-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
              {error}
            </div>
          )}
          
          <button type="submit" className="w-full bg-primary text-primary-foreground font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-primary/25 hover:bg-primary/90 transition-all active:scale-[0.98] mt-2">
            Authenticate
          </button>
        </form>
      </Card3D>
    </div>
  );
}
