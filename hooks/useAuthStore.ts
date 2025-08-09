import { create } from 'zustand';

export type UserRole = 'PETANI' | 'PAKAR';

export type User = {
  id: string;
  role: UserRole;
};

export type AuthState = {
  accessToken: string | null;
  user: User | null;
  setAuth: (token: string, user: User) => void;
  clearAuth: () => void;
  isLoggedIn: boolean;
};

export const useAuthStore = create<AuthState>((set, get) => ({
  accessToken: null,
  user: null,
  setAuth: (token, user) =>
    set({
      accessToken: token,
      user,
    }),
  clearAuth: () =>
    set({
      accessToken: null,
      user: null,
    }),
  get isLoggedIn() {
    return Boolean(get().accessToken);
  },
}));

export const getToken = () => useAuthStore.getState().accessToken;
