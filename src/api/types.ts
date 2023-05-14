export type ResultResponse<D> = {
  status?: string
  error?: boolean
  data: D
  time?: Date
}
export interface IUser {
  name: string
  email: string
  role: string
  photo: string
  _id: string
  id: string
  created_at: string
  updated_at: string
  __v: number
}

export interface GenericResponse {
  status: string
  message: string
}

export interface ILoginInput {
  email: string
  password: string
}

export interface ISignUpInput {
  name: string
  email: string
  password: string
  passwordConfirm: string
}

export interface ILoginResponse {
  refresh: string
  access: string
}

export interface ISignUpResponse {
  status: string
  message: string
}

export interface IUserResponse {
  id: string
  email: string
  name: string | null
  avatar: string
}

export interface IPostRequest {
  title: string
  content: string
  image: string
  user: string
}

export interface IPostResponse {
  id: string
  title: string
  content: string
  image: string
  category: string
  user: IUser
  created_at: string
  updated_at: string
}

export interface IPostsResponse {
  status: string
  data: {
    posts: IPostResponse[]
  }
}
