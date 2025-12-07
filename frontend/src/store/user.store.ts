import { toast } from 'react-toastify'
import { io, Socket } from 'socket.io-client'
import { create } from 'zustand'
import { axiosinstance } from '../lib/axios'

interface User {
  _id: string
  name: string
  email: string
  avatarUrl?: string
}

interface AuthState {
  authUser: User | null
  isSigningUp: boolean
  isLoggingIn: boolean
  isCheckingAuth: boolean
  isUpdatingProfile: boolean
  onlineUsers: string[]
  socket: Socket | null

  // actions
  checkAuth: () => Promise<void>
  signup: (data: Record<string, unknown>) => Promise<unknown>
  login: (data: Record<string, unknown>) => Promise<unknown>
  logout: () => Promise<void>
  updateProfile: (file: File) => Promise<void>

  connectSocket: () => void
  disconnectSocket: () => void
}

export const userAuthStore = create<AuthState>((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isCheckingAuth: false,
  isUpdatingProfile: false,

  onlineUsers: [],
  socket: null,

  signup: async (data: Record<string, unknown>) => {
    set({ isSigningUp: true })
    try {
      const res = await axiosinstance.post('/auth/register', data)
      const userData = res.data?.user
      if (userData) {
        set({ authUser: { _id: userData.id, name: userData.name, email: userData.email } })
        toast.success('Account created successfully')
        get().connectSocket()
        return { success: true, data: userData }
      }
      return { success: false }
    } catch {
      toast.error('Signup failed')
      return { success: false }
    } finally {
      set({ isSigningUp: false })
    }
  },

  login: async (data: Record<string, unknown>) => {
    set({ isLoggingIn: true })
    try {
      const res = await axiosinstance.post('/auth/login', data)
      const userData = res.data?.user
      if (userData) {
        set({ authUser: { _id: userData.id, name: userData.name, email: userData.email } })
        toast.success('Logged in successfully')
        get().connectSocket()
        return { success: true, data: userData }
      }
      return { success: false }
    } catch {
      toast.error('Login failed')
      return { success: false }
    } finally {
      set({ isLoggingIn: false })
    }
  },

  checkAuth: async () => {
    set({ isCheckingAuth: true })
    try {
      const res = await axiosinstance.get('/auth/me')
      const userData = res.data?.user
      if (userData) {
        set({ authUser: { _id: (userData.id as string) || '', name: userData.name, email: userData.email } })
        get().connectSocket()
      }
    } catch {
      set({ authUser: null })
    } finally {
      set({ isCheckingAuth: false })
    }
  },

  logout: async () => {
    try {
      // backend may not have a logout endpoint; best-effort
      await axiosinstance.post('/auth/logout').catch(() => {})
    } catch {
      // ignore
    } finally {
      const socket = get().socket
      if (socket) {
        socket.disconnect()
      }
      set({ authUser: null, socket: null })
    }
  },

  updateProfile: async (file: File) => {
    set({ isUpdatingProfile: true })
    try {
      const form = new FormData()
      form.append('avatar', file)
      const res = await axiosinstance.post('/user/avatar', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      const updated = res.data?.user
      const current = get().authUser
      if (updated && current) {
        set({ authUser: { ...current, avatarUrl: (updated.avatarUrl as string) || current.avatarUrl } })
      }
    } catch {
      toast.error('Update profile failed')
    } finally {
      set({ isUpdatingProfile: false })
    }
  },

  connectSocket: () => {
    if (get().socket) return
    try {
      const socket = io('http://localhost:3000', { withCredentials: true })
      socket.on('connect', () => {
        console.log('socket connected', socket.id)
      })
      socket.on('disconnect', () => {
        console.log('socket disconnected')
      })
      set({ socket })
    } catch (error) {
      console.warn('Socket connect failed', error)
    }
  },

  disconnectSocket: () => {
    const socket = get().socket
    if (socket) {
      socket.disconnect()
      set({ socket: null })
    }
  },
}))