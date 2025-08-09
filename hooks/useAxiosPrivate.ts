'use client';

import { useEffect } from 'react';
import { axiosPrivate } from '@/api/axiosPrivate';
import { useAuthStore } from '@/hooks/useAuthStore';

export const useAxiosPrivate = () => {
  const accessToken = useAuthStore((s) => s.accessToken);
  const clearAuth = useAuthStore((s) => s.clearAuth);

  useEffect(() => {
    const reqId = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers?.Authorization && accessToken) {
          if (config.headers) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
          }
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    const resId = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error?.response?.status;

        if (status === 401) {
          clearAuth();
        }

        return Promise.reject(error);
      },
    );

    return () => {
      axiosPrivate.interceptors.request.eject(reqId);
      axiosPrivate.interceptors.response.eject(resId);
    };
  }, [accessToken, clearAuth]);

  return axiosPrivate;
};

export default useAxiosPrivate;
