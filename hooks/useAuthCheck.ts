// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useAuthStore } from '@/hooks/useAuthStore';
// import axiosPrivate from '@/api/axiosPrivate';

// type MeResponse = {
//   id: string;
//   name: string;
//   role: 'PETANI' | 'PAKAR';
// };

// export const useAuthCheck = (opts?: { redirectOnFail?: string }) => {
//   const router = useRouter();
//   const { accessToken, setAuth, clearAuth, user } = useAuthStore();
//   const [checking, setChecking] = useState<boolean>(true);

//   useEffect(() => {
//     let active = true;

//     const run = async () => {
//       if (!accessToken) {
//         setChecking(false);
//         if (opts?.redirectOnFail) router.replace(opts.redirectOnFail);
//         return;
//       }

//       try {
//         const { data } = await axiosPrivate.get<MeResponse>('/me');
//         if (active && data) setAuth(accessToken, data);
//       } catch {
//         if (active) {
//           clearAuth();
//           if (opts?.redirectOnFail) router.replace(opts.redirectOnFail);
//         }
//       } finally {
//         if (active) setChecking(false);
//       }
//     };

//     run();
//     return () => {
//       active = false;
//     };
//   }, [accessToken, clearAuth, setAuth, router, opts?.redirectOnFail]);

//   return { checking, isLoggedIn: !!accessToken, user };
// };
