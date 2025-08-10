'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { useAuthStore } from '@/hooks/useAuthStore';
import { AxiosError } from 'axios';
import axiosPublic from '@/api/axiosPublic';

const ROLES = ['PETANI', 'PAKAR'] as const;
type Role = (typeof ROLES)[number];

export default function RegisterPage() {
  const router = useRouter();
  const setAuth = useAuthStore((s) => s.setAuth);

  const [name, setName] = useState('');
  const [role, setRole] = useState<Role | ''>('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = useMemo(
    () =>
      name.trim().length > 0 &&
      role !== '' &&
      email.trim().length > 0 &&
      password.length >= 6 &&
      confirm.length >= 6 &&
      password === confirm &&
      !loading,
    [name, role, email, password, confirm, loading],
  );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }
    if (!role) {
      setError('Please select a role.');
      return;
    }

    setLoading(true);
    try {
      const { data } = await axiosPublic.post('/auth/register', {
        name: name.trim(),
        email: email.trim(),
        password,
        role,
      });

      if (data?.token && data?.user) {
        setAuth(data.token, data.user);
        router.push('/');
      } else {
        router.push('/login');
      }
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        setError(
          err.response?.data?.message || err.response?.data?.error || 'Registration failed.',
        );
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left hero – identical to Login */}
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

      {/* Right form card */}
      <div className="flex flex-col items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-sm mb-6">
          <h2 className="text-2xl font-semibold text-center">
            Buat Akun di <span className="text-green-600">JagAI</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-1 text-center">
            Daftar kurang dari satu menit
          </p>
        </div>
        <Card className="w-full max-w-sm p-6 shadow-sm bg-white">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nama</Label>
              <Input
                id="name"
                placeholder="Nama lengkap"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoFocus
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Peran</Label>
              <Select value={role} onValueChange={(v) => setRole(v as Role)}>
                <SelectTrigger id="role" className="w-full">
                  <SelectValue placeholder="Pilih peran Anda" />
                </SelectTrigger>
                <SelectContent>
                  {ROLES.map((r) => (
                    <SelectItem key={r} value={r}>
                      {r}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPass(e.target.value)}
                required
                minLength={6}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm">Konfirmasi Password</Label>
              <Input
                id="confirm"
                type="password"
                placeholder="••••••••"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                minLength={6}
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button
              type="submit"
              disabled={!canSubmit}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              {loading ? 'Creating…' : 'Create account'}
            </Button>
          </form>
          <p className="mt-6 text-center text-sm">
            Sudah punya akun?{' '}
            <Link href="/login" className="font-medium text-green-700 hover:underline">
              Masuk
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
