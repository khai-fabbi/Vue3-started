import axios from 'axios'
import type { GenericResponse, ILoginInput, ILoginResponse, ISignUpInput, IUserResponse } from './types'

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:8000/api/'

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const refreshAccessTokenFn = async () => {
  const response = await authApi.get<ILoginResponse>('auth/refresh')
  return response
}

authApi.interceptors.response.use(
  response => {
    return response.data
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
  return response
}

export const loginUserFn = async (user: ILoginInput) => {
  const response = await authApi.post<ILoginResponse>('auth/login', user)
  return response
}

export const verifyEmailFn = async (verificationCode: string) => {
  const response = await authApi.get<GenericResponse>(`auth/verifyemail/${verificationCode}`)
  return response
}

export const logoutUserFn = async () => {
  const response = await authApi.get<GenericResponse>('auth/logout')
  return response
}

export const getMeFn = async () => {
  const response = await authApi.get<IUserResponse>('users/me')
  return response
}
