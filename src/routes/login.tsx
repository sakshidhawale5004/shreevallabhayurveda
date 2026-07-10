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
      await loginFn({ data: { username, password } });
      router.invalidate();
      navigate({ to: "/dashboard" });
    } catch (err: any) {
      setError(err.message || "Invalid username or password");
    }
  };

  return (
    <Layout>
      <div className="container-page py-24 flex justify-center items-center min-h-[60vh]">
        <Card3D className="p-8 w-full max-w-md">
          <h2 className="font-display text-3xl mb-2 text-primary">Admin Login</h2>
          <p className="text-muted-foreground text-sm mb-6">Please sign in to access the secure dashboard.</p>
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
