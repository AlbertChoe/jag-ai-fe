import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/app/hooks/useAuthStore';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  const clearAuth = useAuthStore((s) => s.clearAuth);
  const router = useRouter();

  return (
    <main className="p-6 space-y-4">
      {isLoggedIn ? (
        <Button
          onClick={() => {
            clearAuth();
            router.push('/login');
          }}
        >
          Logout
        </Button>
      ) : (
        <Button onClick={() => router.push('/login')}>Login</Button>
      )}
    </main>
  );
}
