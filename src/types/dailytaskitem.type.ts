export interface TaskItem {
  id: string
  groupId: string
  tag: string
  time: string
  title: string
  statusByDate: {
    [date: string]: boolean
  }
}

export interface TaskGroup {
  id: string
  label: string
}
