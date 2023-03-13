import { useState } from 'react'
import { HandleDate, ClockProps } from '../protocols/clock'

interface UseClock {
  handleDate: HandleDate
  dateFormat: string
}

const useClock = ({
  language,
  dateTimeFormatOptions,
}: ClockProps): UseClock => {
  const [dateFormat, setDateFormat] = useState<string>(
    new Date()
      .toLocaleDateString(language, dateTimeFormatOptions)
      .replace('.,', '')
  )

  class HandleDate implements HandleDate {
    date(): string {
      return new Date()
        .toLocaleDateString(language, dateTimeFormatOptions)
        .replace('.,', '')
    }

    changeDate() {
      const dateInterval = setInterval(() => {
        const newDate = this.date()
        if (dateFormat !== newDate) setDateFormat(newDate)
      }, 1000)
      return dateInterval
    }

    stopInterval(interval: NodeJS.Timer) {
      clearInterval(interval)
    }
  }
  return {
    dateFormat,
    handleDate: new HandleDate(),
  }
}

export default useClock
