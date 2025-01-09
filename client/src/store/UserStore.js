import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false
    this._user = {}
    makeAutoObservable(this)
  }

  // actions которые изменяют состояние
  setIsAuth(bool) {
    this._isAuth = bool
  }
  setUser(user) {
    this._user = user
  }

  // getters для получения переменных из текущего состояния
  get isAuth() {
    return this._isAuth
  }
  get user() {
    return this._user
  }
}
