import { useEffect, useState } from 'react'
import { ClockProps } from '../components/header/clock/types'
import { HandleDate } from './@types/handle-date-type'

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
  const [dateFormat, setDateFormat] = useState<string>('')

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
  useEffect(() => {
    setDateFormat(getDate({ language, dateTimeFormatOptions }))
  }, [language, dateTimeFormatOptions])
  return {
    dateFormat,
    handleDate: new HandleDate(),
  }
}

export default useClock
