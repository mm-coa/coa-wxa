import { Dic } from '../typing'

export default new class {

  async init (page: WechatMiniprogram.Page.TrivialInstance, id: string, data: Dic<any> = {}, resume = true) {

    const component = page.selectComponent(`#${id}`)

    if (!component) {
      console.warn(`please provide correct id: ${id}`)
      return
    }

    return await new Promise(resolve => {

      component.setData({ show: true, ...data })

      component.complete = (res: Dic<string>) => {
        component.setData({ show: false })
        if (resume && component.resume)
          component.resume()
        resolve(res)
      }
    }) as Promise<any>

  }

  get (page: WechatMiniprogram.Page.TrivialInstance, id: string) {
    return page.selectComponent(`#${id}`)
  }
}