export default new class {
  env = ''
  selfAppId = ''

  set ({ env, selfAppId }: { env: string, selfAppId: string }) {
    this.env = env
    this.selfAppId = selfAppId
  }
}