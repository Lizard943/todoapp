function getLastNDatesWithWeekday(n: number) {
  const weekdays = ['CN', 'TH 2', 'TH 3', 'TH 4', 'TH 5', 'TH 6', 'TH 7']
  const dates: { date: string; weekday: string }[] = []
  const today = new Date()

  for (let i = 0; i < n; i++) {
    const d = new Date()
    d.setDate(today.getDate() - i)
    const weekday = weekdays[d.getDay()]
    const dateStr = d.toISOString().split('T')[0]
    dates.push({ date: dateStr, weekday })
  }

  return dates
}

export default getLastNDatesWithWeekday
