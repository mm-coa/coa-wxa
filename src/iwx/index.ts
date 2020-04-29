import { DataSet } from '../typing'

const w = wx

const clone = (source: any) => {
  return JSON.parse(JSON.stringify(source))
}

const showModel = (content: string) => {
  wx.showModal({ title: '错误', content, showCancel: false, success: () => showModel(content) })
}

const error = (message: string): never => {
  wx.hideLoading()
  showModel(message)
  throw new Error('DieError: ' + message)
}

const async = (func: (...args: any[]) => any, args?: any, self?: WechatMiniprogram.Component.TrivialInstance | WechatMiniprogram.Page.TrivialInstance) => new Promise(resolve => func({
  ...args, success: resolve, fail: () => resolve(undefined),
}, self))

const async_void = (func: (...args: any[]) => any, args?: any) => new Promise(resolve => func({
  ...args, success: () => resolve(true), fail: () => resolve(false),
}))

const sync = (func: (...args: any[]) => any, ...args: any[]) => {
  try {
    return func(...args)
  } catch (e) {
    return undefined
  }
}

export default new class {

  showToast (title: string, option?: WechatMiniprogram.ShowToastOption) {
    const opt = { mask: true, icon: 'none' } as WechatMiniprogram.ShowToastOption
    w.showToast({ title, ...opt, ...option })
  }

  showModal (object: WechatMiniprogram.ShowModalOption) {
    w.showModal(object)
  }

  showLoading (title = '正在加载中...', option = {}) {
    const opt = { mask: true }
    w.showLoading({ title, ...opt, ...option })
  }

  showTabBar (object: WechatMiniprogram.ShowTabBarOption) {
    w.showTabBar(object)
  }

  hideTabBar (object: WechatMiniprogram.HideTabBarOption) {
    w.hideTabBar(object)
  }

  hideLoading () {
    w.hideLoading()
  }

  hideKeyboard (object?: WechatMiniprogram.HideKeyboardOption) {
    w.hideKeyboard(object)
  }

  pageScrollTo (object: WechatMiniprogram.PageScrollToOption) {
    w.pageScrollTo(object)
  }

  canIUse (methodName: string) {
    return w.canIUse(methodName)
  }

  nextTick (callback: (...args: any[]) => any) {
    w.nextTick(callback)
  }

  getMenuButtonBoundingClientRect () {
    return w.getMenuButtonBoundingClientRect()
  }

  setNavigationBarTitle (title: string, object?: WechatMiniprogram.SetNavigationBarTitleOption) {
    w.setNavigationBarTitle({ title, ...object })
  }

  setNavigationBarColor (object: WechatMiniprogram.SetNavigationBarColorOption) {
    w.setNavigationBarColor(object)
  }

  setBackgroundColor (object: WechatMiniprogram.SetBackgroundColorOption) {
    w.setBackgroundColor(object)
  }

  saveImageToPhotosAlbum (args: WechatMiniprogram.SaveImageToPhotosAlbumOption) {
    w.saveImageToPhotosAlbum(args)
  }

  navigateToMiniProgram (appId: string, object?: WechatMiniprogram.NavigateToMiniProgramOption) {
    w.navigateToMiniProgram({ appId, ...object })
  }

  switchTab (object: WechatMiniprogram.SwitchTabOption) {
    w.switchTab(object)
  }

  redirectTo (object: WechatMiniprogram.RedirectToOption) {
    w.redirectTo(object)
  }

  navigateTo (object: WechatMiniprogram.NavigateToOption) {
    w.navigateTo(object)
  }

  navigateBack (object: WechatMiniprogram.NavigateBackOption) {
    w.navigateBack(object)
  }

  navigateBackMiniProgram (object: WechatMiniprogram.NavigateBackMiniProgramOption) {
    w.navigateBackMiniProgram(object)
  }

  reLaunch (object: WechatMiniprogram.ReLaunchOption) {
    w.reLaunch(object)
  }

  createSelectorQuery () {
    return w.createSelectorQuery()
  }

  setClipboardData (object: WechatMiniprogram.SetClipboardDataOption) {
    w.setClipboardData(object)
  }

  createAnimation (object: any) {
    w.createAnimation(object)
  }

  previewImage (object: WechatMiniprogram.PreviewImageOption) {
    w.previewImage(object)
  }

  makePhoneCall (object: WechatMiniprogram.MakePhoneCallOption) {
    w.makePhoneCall(object)
  }

  getApp () {
    return getApp()
  }

  getCurrentPages () {
    return getCurrentPages()
  }

  getSystemInfoSync () {
    return sync(w.getSystemInfoSync)
  }

  getExtConfigSync () {
    return sync(w.getExtConfigSync)
  }

  getAccountInfoSync () {
    return sync(w.getAccountInfoSync)
  }

  getEnterOptionsSync () {
    // @ts-ignore
    return sync(w.getEnterOptionsSync)
  }

  getLaunchOptionsSync () {
    return sync(w.getLaunchOptionsSync)
  }

  async canvasToTempFilePath (object: WechatMiniprogram.CanvasToTempFilePathOption, self: WechatMiniprogram.Component.TrivialInstance | WechatMiniprogram.Page.TrivialInstance) {
    return await async(w.canvasToTempFilePath, object, self)
  }

  async openDocument (args: WechatMiniprogram.OpenDocumentOption) {
    return await async_void(w.openDocument, args)
  }

  async getSystemInfo () {
    return await async(w.getSystemInfo)
  }

  async checkSystemInfo () {
    return await this.getSystemInfo() || error('系统信息获取失败')
  }

  async requestPayment (arg: WechatMiniprogram.RequestPaymentOption) {
    return await async(w.requestPayment, arg)
  }

  async setStorage (arg: WechatMiniprogram.SetStorageOption) {
    return await async(w.setStorage, arg)
  }

  async getStorage (arg: WechatMiniprogram.GetStorageOption) {
    return await async(w.getStorage, arg)
  }

  async removeStorage (arg: WechatMiniprogram.RemoveStorageOption) {
    return await async(w.removeStorage, arg)
  }

  async clearStorage (arg: WechatMiniprogram.ClearStorageOption) {
    return await async(w.clearStorage, arg)
  }

  setStorageSync (...args: any[]) {
    return sync(w.setStorageSync, ...args)
  }

  getStorageSync (...args: any[]) {
    return sync(w.getStorageSync, ...args)
  }

  removeStorageSync (...args: any[]) {
    return sync(w.removeStorageSync, ...args)
  }

  clearStorageSync () {
    return sync(w.clearStorageSync)
  }

  async request (arg: WechatMiniprogram.RequestOption) {
    return await async(w.request, arg) as any
  }

  async login (arg?: WechatMiniprogram.LoginOption) {
    return await async(w.login, arg)
  }

  async wxCheckSession () {
    return await async(w.checkSession)
  }

  async checkLoginCode (arg?: WechatMiniprogram.LoginOption) {
    const res = await this.login(arg) as { code: '' }
    return res.code || error('微信登陆失败，无法获取code')
  }

  async getImageInfo (args: WechatMiniprogram.GetImageInfoOption) {
    return await async(w.getImageInfo, args) as any
  }

  async chooseImage (args: WechatMiniprogram.ChooseImageOption) {
    return await async(w.chooseImage, args) as any
  }

  async uploadFile (args: WechatMiniprogram.UploadFileOption) {
    return await async(w.uploadFile, args)
  }

  async downloadFile (args: WechatMiniprogram.DownloadFileOption) {
    return await async(w.downloadFile, args)
  }

  async getImageInfos (images: WechatMiniprogram.GetImageInfoOption) {

    const imageArr = clone(images)

    if (!imageArr || !Array.isArray(imageArr))
      return

    const tempFiles = await Promise.all(imageArr.map(v => this.getImageInfo({ src: v.url })))

    tempFiles.forEach((v, i) => imageArr[i].url = v ? (v as DataSet).path : '')

    return imageArr.filter(v => v.url)
  }

  async chooseAddress (args: WechatMiniprogram.ChooseAddressOption) {
    return await async(w.chooseAddress, args)
  }

  async getSetting (args: WechatMiniprogram.GetSettingOption) {
    return await async(w.getSetting, args)
  }

  async openSetting (args?: WechatMiniprogram.OpenSettingOption) {
    return await async(w.openSetting, args)
  }

  async authorize (args: WechatMiniprogram.AuthorizeOption) {
    return await async_void(w.authorize, args)
  }

  async showModalAsync (object: WechatMiniprogram.ShowModalOption) {
    return await async(w.showModal, object)
  }

  async getLocation (object: WechatMiniprogram.GetLocationOption) {
    return await async(w.getLocation, object)
  }

  async scanCode (object: WechatMiniprogram.ScanCodeOption) {
    return await async(w.scanCode, object)
  }

  async setClipboardDataAsyncVoid (object: WechatMiniprogram.SetClipboardDataOption) {
    return await async_void(w.setClipboardData, object)
  }

  async saveImageToPhotosAlbumAsync (args: WechatMiniprogram.SaveImageToPhotosAlbumOption) {
    return await async(w.saveImageToPhotosAlbum, args)
  }

  self () {
    return w
  }
}