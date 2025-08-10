'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useAuthStore } from '@/hooks/useAuthStore';
import { AxiosError } from 'axios';
import axiosPublic from '@/api/axiosPublic';

export default function LoginPage() {
  const router = useRouter();
  const setAuth = useAuthStore((s) => s.setAuth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { data } = await axiosPublic.post('/auth/login', { email, password });
      const token = data?.token;
      if (!token || !data?.user) throw new Error('Invalid login response');
      setAuth(token, data.user);
      router.push('/');
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        setError(err.response?.data?.message || 'Login failed. Please try again.');
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="relative hidden md:flex items-center justify-center bg-green-600 text-white">
        <div className="max-w-md px-10">
          <p className="text-emerald-100 text-sm mb-2">Petani Pintar</p>
          <h1 className="text-4xl font-semibold leading-tight">Hasil Maksimal</h1>

          <div className="mt-10 flex items-center justify-center">
            <div className="relative h-56 w-56 rounded-full ring-4 ring-white/30 ring-offset-2 ring-offset-green-600 overflow-hidden">
              <Image src="/images/jagung.png" alt="Jagung" fill className="object-cover" priority />
            </div>
          </div>
        </div>

        <div className="absolute inset-y-0 right-0 w-px bg-white/30" />
      </div>

      <div className="flex flex-col items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-sm mb-6">
          <h2 className="text-2xl font-semibold text-center">
            Selamat Datang di <span className="text-green-600">JagAI</span>
          </h2>
        </div>
        <Card className="w-full max-w-sm p-6 shadow-sm bg-white">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </Button>
          </form>
          <div className="mt-4 text-right">
            <Link href="/forgot-password" className="text-sm underline underline-offset-4">
              Forgot password?
            </Link>
          </div>
          <p className="mt-6 text-center text-sm">
            Belum punya akun?{' '}
            <Link href="/register" className="font-medium text-green-700 hover:underline">
              Daftar
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
