import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
dayjs.extend(isoWeek)

const countWeekDayStreak = (status: object) => {
  const startOfWeek = dayjs().startOf('isoWeek') // thứ 2 đầu tuần
  let currentDay = ''
  let count = 0
  for (let i = 0; i < 7; i++) {
    currentDay = startOfWeek.add(i, 'day').format('YYYY-MM-DD')
    if (status[currentDay]) {
      count++
    }
  }

  return count
}

const getWeekDay = (status: object) => {
  const startOfWeek = dayjs().startOf('isoWeek') // thứ 2 đầu tuần
  let currentDay = ''
  const weekdays = []
  for (let i = 0; i < 7; i++) {
    currentDay = startOfWeek.add(i, 'day').format('YYYY-MM-DD')
    if (status[currentDay]) {
      weekdays.push(100)
    } else weekdays.push(0)
  }

  return weekdays
}

const countCompletedDaysInMonth = (status: object) => {
  const now = dayjs()
  const daysInMonth = now.daysInMonth()
  let currentDay = ''
  let count = 0
  for (let day = 1; day <= daysInMonth; day++) {
    currentDay = now.date(day).format('YYYY-MM-DD')
    if (status[currentDay]) {
      count++
    }
  }
  return { count, daysInMonth }
}

export default { countWeekDayStreak, countCompletedDaysInMonth, getWeekDay }
