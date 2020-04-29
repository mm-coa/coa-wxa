import { DataSet, Dic } from '../typing'

export default new class {

  async init (page: any, id: string, data: DataSet, resume = true) {

    const component = page.selectComponent(`#${id}`)

    if (!component) {
      console.warn(`please provide correct id: ${id}`)
      return
    }

    data = data || {}

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