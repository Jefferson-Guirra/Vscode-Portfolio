export interface HandleDate {
  date: () => string
  changeDate: () => NodeJS.Timer
  stopInterval: (interval: NodeJS.Timer) => void
}

export interface ClockProps {
  language: string
  dateTimeFormatOptions: Intl.DateTimeFormatOptions
}
