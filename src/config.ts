import { die } from '.'

export default new class {

  env = ''
  selfAppId = ''

  set (config: { env: string, selfAppId: string }) {
    this.env = config.env || die.hint('缺少env配置')
    this.selfAppId = config.selfAppId || die.hint('缺少selfAppId配置')
  }
}