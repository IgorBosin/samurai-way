import axios from "axios";
import {LoginInputsType} from "../Components/Login/Login";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
})
export const authApi = {
    auth: () => {
        return instance.get<GetAuthMeResponseType>('auth/me')
    },
    login: (auth:LoginInputsType) => {
        return instance.post<LoginResponseType>('/auth/login', auth)
    },
    logout: () => {
        return instance.delete<GetAuthMeResponseType>('/auth/login')
    },
}
export const profileApi = {
    getUserProfile: (userId: string) => {
        return instance.get<UserResponseType>(`/profile/${userId}`)
    },
    getUserStatus: (userId: string) => {
        return instance.get<string>(`/profile/status/${userId}`)
    },
    changeStatus: (status: string) => {
        return instance.put<CommonResponseType>(`/profile/status`, {status})
    }
}
export const userApi = {
    getUsers: (pageSize: number, currentPage: number) => {
        return instance.get<getUsersResponseType>(`users?count=${pageSize}&page=${currentPage}`)
            .then((res) => {
                return res.data
            })
    },
    followToUser: (userId: number) => {
        return instance.post<CommonResponseType>(`/follow/${userId}`)
    },
    unfollowToUser: (userId: number) => {
        return instance.delete<CommonResponseType>(`/follow/${userId}`)
    },
}

export type getUsersResponseType = {
    items: UsersType[]
    totalCount: number
    error: string
}
export type UsersType = {
    id: number,
    name: string,
    status: string,
    photos: {
        small: any,
        large: any
    },
    followed: boolean
}

type CommonResponseType = {
    resultCode: number
    messages: String[],
    data: {}
}
export type AuthData = {
    id: number
    email: string
    login: string
}
type GetAuthMeResponseType = {
    resultCode: number
    messages: string[],
    data: AuthData
}
export type UserResponseType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

type LoginResponseType = {
    resultCode: number
    messages: string[],
    data: {
        userId: number
    }
}