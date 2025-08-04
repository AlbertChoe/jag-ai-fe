// import { useEffect } from 'react';
// import { axiosPrivate } from '@/api/axiosPrivate';
// import { useAuthStore } from '@/app/hooks/useAuthStore';
// // import { useRefreshToken, useLogout } from './use-auth'; // your react-query or SWR hooks

// export const useAxiosPrivate = () => {
//   const accessToken = useAuthStore((s) => s.accessToken);
//   const { mutateAsync: refresh } = useRefreshToken();
//   const { mutateAsync: logout } = useLogout();

//   useEffect(() => {
//     const reqInterceptor = axiosPrivate.interceptors.request.use(
//       (config) => {
//         if (!config.headers?.Authorization) {
//           config.headers = {
//             ...config.headers,
//             Authorization: `Bearer ${accessToken}`,
//           };
//         }
//         return config;
//       },
//       (error) => Promise.reject(error),
//     );

//     const resInterceptor = axiosPrivate.interceptors.response.use(
//       (response) => response,
//       async (error) => {
//         const prevRequest = error?.config;
//         const status = error?.response?.status;
//         const code = error?.response?.data?.code;

//         if (status === 401 && code === 'ACCESS_TOKEN_EXPIRED' && !prevRequest?.sent) {
//           prevRequest.sent = true;
//           const { access_token: newAccessToken } = await refresh();
//           useAuthStore.getState().setAuth(newAccessToken, useAuthStore.getState().user!);
//           prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
//           return axiosPrivate(prevRequest);
//         }

//         if (status === 401 && code === 'ACCESS_TOKEN_INVALID' && !prevRequest?.sent) {
//           prevRequest.sent = true;
//           await logout();
//           return Promise.reject(error);
//         }

//         if (
//           (status === 440 ||
//             status === 498 ||
//             code === 'REFRESH_TOKEN_EXPIRED' ||
//             code === 'REFRESH_TOKEN_INVALID') &&
//           !prevRequest?.sent
//         ) {
//           prevRequest.sent = true;
//           await logout();
//           return Promise.reject(error);
//         }

//         return Promise.reject(error);
//       },
//     );

//     return () => {
//       axiosPrivate.interceptors.request.eject(reqInterceptor);
//       axiosPrivate.interceptors.response.eject(resInterceptor);
//     };
//   }, [accessToken, refresh, logout]);

//   return axiosPrivate;
// };
// export default useAxiosPrivate;
