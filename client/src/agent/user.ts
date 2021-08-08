import requests from "."
import { UserParams } from "../types/api/user"

const UserAgent = {
  sendEmail: (email: string, id: number) => requests.patch('/users', { email }, id),
  sendShared: (shared: boolean, id: number) => requests.patch('/users', { shared }, id),
  init: (data: UserParams) => requests.post('/users', { ...data })
}

export { UserAgent }
