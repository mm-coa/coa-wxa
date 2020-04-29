const INFINITY = 1 / 0
const oneMinute = 60 * 1000
const oneHour = 60 * oneMinute
const oneDay = 24 * oneHour
const oneYear = 365 * oneDay

export default new class {

  forever: number = 100 * 100 * oneYear

  async timeout (ms = 0) {
    return await new Promise(resolve => {
      setTimeout(() => resolve(), ms)
    })
  }

  toString (value: any): string {
    if (value == null)
      return ''

    if (typeof value === 'string')
      return value

    if (Array.isArray(value))
      return `${value.map((other) => other == null ? other : this.toString(other))}`

    if (typeof value === 'boolean')
      return `${value}`

    const result = `${value}`
    return (result === '0' && (1 / value) === -INFINITY) ? '-0' : result
  }

  assign<T, U> (target: T, source: U) {
    return Object.assign(target, source)
  }

  clone (source: any) {
    return JSON.parse(JSON.stringify(source))
  }

  convert (price: number, splitStr = ',') {
    return price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, splitStr)
  }

}