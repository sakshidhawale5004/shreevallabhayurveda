import { createFileRoute } from '@tanstack/react-router';
import { ShieldAlert } from 'lucide-react';
import { useEffect } from 'react';

export const Route = createFileRoute('/login')({
  component: LoginPage,
});

function LoginPage() {
  useEffect(() => {
    // Automatically redirect to the new PHP dashboard
    window.location.href = '/dashboard.php';
  }, []);

  return (
    <div className="min-h-screen bg-secondary/30 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-background rounded-2xl shadow-xl p-8 border border-border text-center">
        <ShieldAlert className="w-16 h-16 text-primary mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-primary mb-2">Admin Portal Moved</h1>
        <p className="text-muted-foreground mb-6">
          The admin dashboard has been upgraded and moved to a more secure and reliable location.
        </p>
        <a 
          href="/dashboard.php" 
          className="inline-block bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-primary/25 hover:bg-primary/90 transition-all"
        >
          Go to New Admin Portal
        </a>
      </div>
    </div>
  );
}
