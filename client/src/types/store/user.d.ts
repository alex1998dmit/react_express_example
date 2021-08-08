import { UserParams } from "../api/user";
import { RootStoreInterface } from "./root";

export interface UserStoreInterface {
  rootStore: RootStoreInterface
  err: Error | null
  user: UserParams | null
  shared: boolean
  email: string | null
  id: number
  init: () => void
  setUser: (data: UserParams) => void
  updateUser: (data: UserParams) => void
  sendEmail: (email: string) => void
  sendShared: (shared?: boolean) => void
  isSubmitted: boolean
}
