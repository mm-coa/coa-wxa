export default new class {
  env = 'd0'
  selfAppId = wx.getAccountInfoSync().miniProgram.appId || ''

  setEnv (env: string, selfAppId?: string) {
    this.env = env
    selfAppId && (this.selfAppId = selfAppId)
  }
}