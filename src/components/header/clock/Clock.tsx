import useClock from '../../../hooks/useClock'
import { useEffect } from 'react'
import { ClockProps } from '../clock/types'

const Clock = ({ language, dateTimeFormatOptions }: ClockProps) => {
  const { dateFormat, handleDate } = useClock({
    language,
    dateTimeFormatOptions,
  })

  useEffect(() => {
    const interval = handleDate.changeDate()
    return () => {
      handleDate.stopInterval(interval)
    }
  }, [handleDate])

  return <time>{dateFormat}</time>
}

export default Clock
