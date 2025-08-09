'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type UserRole = 'PETANI' | 'PAKAR';
export type User = { id: string; name: string; role: UserRole };

type AuthState = {
  accessToken: string | null;
  user: User | null;
  isLoggedIn: boolean;
  setAuth: (token: string, user: User) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      user: null,
      isLoggedIn: false,
      setAuth: (token, user) => set({ accessToken: token, user, isLoggedIn: true }),
      clearAuth: () => set({ accessToken: null, user: null, isLoggedIn: false }),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ accessToken: s.accessToken, user: s.user, isLoggedIn: s.isLoggedIn }),
    },
  ),
);

export const getToken = () => useAuthStore.getState().accessToken;
