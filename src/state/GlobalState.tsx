import { create } from 'zustand'

type State = {
  sidebarOpen: boolean
  loginModalOpen: boolean
  signupModalOpen: boolean
  user: TUser | null
}
type Actions = {
  toggleSidebarOpen: () => void
  setloginModalOpen: (x: boolean) => void
  setsignupModalOpen: (x: boolean) => void
  setUser: (x: TUser | null) => void
}
type T = State & Actions
// we create a store, by passing it a callback fn that returns an object
const useGlobalStore = create<T>()((set) => ({
  sidebarOpen: false,
  loginModalOpen: false,
  signupModalOpen: false,
  user: null,

  toggleSidebarOpen: () =>
    set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setloginModalOpen: (x) => set(() => ({ loginModalOpen: x })),
  setsignupModalOpen: (x) => set(() => ({ signupModalOpen: x })),
  setUser: (x) => set(() => ({ user: x })),
}))

export default useGlobalStore
