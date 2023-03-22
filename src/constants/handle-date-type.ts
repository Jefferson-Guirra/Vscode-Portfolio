export interface HandleDateType {
  changeDate: () => NodeJS.Timer
  stopInterval: (interval: NodeJS.Timer) => void
}
