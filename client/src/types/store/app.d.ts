import { RootStoreInterface } from "./root";

export interface AppStoreInterface {
  rootStore: RootStoreInterface
  isLoading: boolean
  startLoading: () => void
  completeLoading: () => void
}