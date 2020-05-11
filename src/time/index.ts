const oneMinute = 60 * 1000
const oneHour = 60 * oneMinute
const oneDay = 24 * oneHour

export default new class {
  oneHour = oneHour
  oneDay = oneDay

  onWeek = 7 * oneDay
  oneMonth = 30 * oneDay
  oneYear = 365 * oneDay

  forever = 100 * 100 * this.oneYear
}