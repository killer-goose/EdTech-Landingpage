import { create } from 'zustand'

type State = {
  sidebarOpen: boolean
}
type Actions = {
  toggleSidebarOpen: () => void
}
type T = State & Actions
// we create a store, by passing it a callback fn that returns an object
const useGlobalStore = create<T>()((set) => ({
  sidebarOpen: false,
  toggleSidebarOpen: () =>
    set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}))

export default useGlobalStore
