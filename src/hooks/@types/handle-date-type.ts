export interface HandleDate {
  changeDate: () => NodeJS.Timer
  stopInterval: (interval: NodeJS.Timer) => void
}
