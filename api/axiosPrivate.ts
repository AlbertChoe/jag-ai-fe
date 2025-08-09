'use client';
import axios from 'axios';
import { getToken } from '@/hooks/useAuthStore';

export const axiosPrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

axiosPrivate.interceptors.request.use((config) => {
  const token = getToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosPrivate;
