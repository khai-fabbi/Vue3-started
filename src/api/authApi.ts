import axios from 'axios'
import type { GenericResponse, ILoginInput, ILoginResponse, ISignUpInput, IUserResponse, ResultResponse } from './types'
import Cookies from 'js-cookie'

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:8000/api/v1/'

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const refreshAccessTokenFn = async () => {
  const response = await authApi.get<ILoginResponse>('auth/token/refresh')
  return response
}

// Interceptors
authApi.interceptors.request.use(config => {
  // Do something before request is sent
  const accessToken = Cookies.get('access_token')
  if (accessToken) {
    // eslint-disable-next-line no-param-reassign
    if (config.headers) config.headers.Authorization = `Bearer ${accessToken}`
    return config
  }
  return config
})
authApi.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    const originalRequest = error.config
    const errMessage = error.response.data.message as string
    if (errMessage.includes('not logged in') && !originalRequest._retry) {
      originalRequest._retry = true
      await refreshAccessTokenFn()
      return authApi(originalRequest)
    }

    if (errMessage.includes('not refresh access token')) {
      document.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export const signUpUserFn = async (user: ISignUpInput) => {
  const response = await authApi.post<GenericResponse>('auth/register', user)
  return response.data
}

export const loginUserFn = async (user: ILoginInput) => {
  const response = await authApi.post<ResultResponse<ILoginResponse>>('auth/token/generate/', user)
  return response.data
}

// export const verifyEmailFn = async (verificationCode: string) => {
//   const response = await authApi.get<GenericResponse>(`auth/verifyemail/${verificationCode}`)
//   return response.data
// }

export const logoutUserFn = async () => {
  const response = await authApi.get<GenericResponse>('auth/logout')
  return response.data
}

export const getMeFn = async () => {
  const response = await authApi.get<ResultResponse<IUserResponse>>('me/')
  return response.data
}
