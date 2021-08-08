import { AppStoreInterface } from "./app";
import { UserStoreInterface } from "./user";

export interface RootStoreInterface {
  userStore: UserStoreInterface
  appStore: AppStoreInterface
}