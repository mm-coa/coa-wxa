import { opt } from '../index'
import { Dic } from '../typing'

// 内存
const $STATE = {} as Dic<string>

export default new class {

  setLocalStorage (key: string, value: any, ms = 30 * 24 * 3600 * 1000) {
    const completeKey = this.getKey(key)
    wx.setStorageSync(completeKey, [Date.now() + ms, value])
  }

  getLocalStorage<T> (key: string) {

    const completeKey = this.getKey(key)

    const stateResult = this.getState(key)

    // 内存中有则直接返回内存中
    if (stateResult)
      return stateResult as T

    const result = wx.getStorageSync(completeKey) || [0, undefined]

    const expire = result[0] || 0

    // 过期后删除
    if (expire < 1 || expire < Date.now()) {
      this.removeLocalStorage(key)
      return undefined
    }

    const data = result[1]

    // 如果内存中没有,则存储一份
    if (!stateResult)
      this.setState(key, data)

    return data as T
  }

  removeLocalStorage (key: string) {
    return wx.removeStorageSync(this.getKey(key))
  }

  clearLocalStorage () {
    wx.clearStorageSync()
  }

  setState (key: string, value: any, ms = 24 * 3600 * 1000) {
    const expire = Date.now() + ms
    $STATE[key] = JSON.stringify([expire, value])
    return value
  }

  getState<T> (key: string) {
    try {
      const data = JSON.parse($STATE[key] || '[0]')
      const expire = parseInt(data[0]) || 0
      if (expire < 1 || expire < Date.now()) {
        this.removeState(key)
        return undefined
      }
      return data[1] as T
    } catch (e) {
      return undefined
    }
  }

  removeState (key: string) {
    delete $STATE[key]
  }

  clearState () {
    const keys = Object.keys($STATE)
    keys.forEach(k => this.removeState(k))
  }

  showState () {
    console.log('$STATE', $STATE)
  }

  clear () {
    this.clearLocalStorage()
    this.clearState()
  }

  remove (key: string) {
    this.removeLocalStorage(key)
    this.removeState(key)
  }

  get<T> (key: string) {
    return this.getState<T>(key) || this.getLocalStorage<T>(key)
  }

  set (key: string, value: any) {
    this.setState(key, value)
    this.setLocalStorage(key, value)
  }

  private getKey (key: string) {
    return 's_' + opt.env + '_' + key
  }
}