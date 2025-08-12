import dayjs from 'dayjs'

function getDateRangeArray(startDateStr: string) {
  const startDate = dayjs(startDateStr)
  const endDate = dayjs() // hôm nay
  const dates = []

  let current = startDate
  while (current.isBefore(endDate) || current.isSame(endDate, 'day')) {
    dates.push(current.format('DD/MM'))
    current = current.add(1, 'day')
  }

  return dates
}

function getStatusRangeArray(startDateStr: string, statusObj: object) {
  const startDate = dayjs(startDateStr)
  const endDate = dayjs() // hôm nay
  const status = []

  let current = startDate
  while (current.isBefore(endDate) || current.isSame(endDate, 'day')) {
    status.push(statusObj[current.format('YYYY-MM-DD')] ?? 0)
    current = current.add(1, 'day')
  }

  return status
}

export default { getDateRangeArray, getStatusRangeArray }
