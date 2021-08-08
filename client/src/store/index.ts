import { AppStoreInterface } from "../types/store/app";
import { RootStoreInterface } from "../types/store/root";
import { UserStoreInterface } from "../types/store/user";
import AppStore from "./App";
import UserStore from "./User";

class RootStore implements RootStoreInterface {
  public userStore: UserStoreInterface

  public appStore: AppStoreInterface

  constructor() {
    this.userStore = new UserStore(this)
    this.appStore = new AppStore(this)
  }
}

export default new RootStore()
