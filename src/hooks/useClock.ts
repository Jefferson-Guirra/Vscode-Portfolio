import { useState } from 'react'
import { HandleDate, ClockProps } from '../protocols/clock'

interface UseClock {
  handleDate: HandleDate
  dateFormat: string
}

const getDate = ({ language, dateTimeFormatOptions }: ClockProps): string => {
  return new Date()
    .toLocaleDateString(language, dateTimeFormatOptions)
    .replace('.,', '')
}

const useClock = ({
  language,
  dateTimeFormatOptions,
}: ClockProps): UseClock => {
  const [dateFormat, setDateFormat] = useState<string>(
    getDate({ language, dateTimeFormatOptions })
  )

  class HandleDate implements HandleDate {
    changeDate() {
      const dateInterval = setInterval(() => {
        const newDate = getDate({ language, dateTimeFormatOptions })
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
