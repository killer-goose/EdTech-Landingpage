import { create } from 'zustand'

type State = {
  sidebarOpen: boolean
  loginModalOpen: boolean
}
type Actions = {
  toggleSidebarOpen: () => void
  setloginModalOpen: (x: boolean) => void
}
type T = State & Actions
// we create a store, by passing it a callback fn that returns an object
const useGlobalStore = create<T>()((set) => ({
  sidebarOpen: false,
  loginModalOpen: false,

  toggleSidebarOpen: () =>
    set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setloginModalOpen: (x) => set(() => ({ loginModalOpen: x })),
}))

export default useGlobalStore
