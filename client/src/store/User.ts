import { makeAutoObservable, runInAction } from "mobx";
import to from 'await-to-js'
import { UserParams } from "../types/api/user";
import { RootStoreInterface } from "../types/store/root";
import { UserStoreInterface } from "../types/store/user";
import { UserAgent } from "../agent/user";
import { newUser } from "../utils/data";

class UserStore implements UserStoreInterface {
  public rootStore: RootStoreInterface

  public user: UserParams | null

  public err: Error | null

  constructor(rootStore: RootStoreInterface) {
    const userFromStorage = JSON.parse(localStorage.getItem('user') || '{}')
    this.rootStore = rootStore
    if (Object.keys(userFromStorage).length > 0) {
      this.user = {
        id: userFromStorage.id,
        shared: userFromStorage.shared,
        email: userFromStorage.email
      }
    } else this.user = null
    this.err = null
    makeAutoObservable(this, { rootStore: false })
  }

  public init = async () => {
    const [err, user] = await to(UserAgent.init(newUser))
    runInAction(() => {
      if (err) this.err = err
      else this.setUser(user)
    })
  }

  public setUser = (data: UserParams) => {
    localStorage.setItem('user', JSON.stringify(data))
    this.user = data
  }

  public updateUser = (data: UserParams) => {
    localStorage.setItem('user', JSON.stringify({...this.user, ...data }))
    this.user = {...this.user, ...data}
  }

  public sendEmail = async (email: string) => {
    const [err, user] = await to(UserAgent.sendEmail(email, this.id))
    runInAction(() => {
      if (err) this.err = err
      else this.updateUser(user)
    })
  }

  public sendShared = async (shared = true as boolean) => {
    const [err, user] = await to(UserAgent.sendShared(shared, this.id))
    runInAction(() => {
      if (err) this.err = err
      else this.updateUser(user)
    })
  }

  public get id() {
    return this.user?.id || 1
  }

  public get shared() {
    return this.user?.shared || false
  }

  public get email() {
    return this.user?.email || null
  }

  public get isSubmitted() {
    return !!(this.shared && this.email)
  }
}

export default UserStore
