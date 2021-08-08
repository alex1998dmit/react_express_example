import { makeAutoObservable } from "mobx";
import { AppStoreInterface } from "../types/store/app";
import { RootStoreInterface } from "../types/store/root";

class AppStore implements AppStoreInterface {
  public rootStore: RootStoreInterface

  public isLoading: boolean

  constructor(rootStore: RootStoreInterface) {
    this.rootStore = rootStore
    this.isLoading = false
    makeAutoObservable(this, { rootStore: false })
  }

  startLoading = () => this.isLoading = true
  completeLoading = () => this.isLoading = false
}

export default AppStore
