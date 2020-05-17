import { Dic } from '../typing'

export default new class {

  private host: string = ''

  set (host: string) {
    this.host = host
  }

  track (event: string, ...logs: Dic<string>[]) {

    // 如果host不存在，则不处理
    if (!this.host) return

    const url = `https://${this.host}/logstores/${event}/track`
    const data = { '__logs__': logs }
    const header = { 'x-log-apiversion': '0.6.0', 'x-log-bodyrawsize': JSON.stringify(data).length }

    // 上报
    wx.request({ method: 'POST', url, data, header })
  }
}