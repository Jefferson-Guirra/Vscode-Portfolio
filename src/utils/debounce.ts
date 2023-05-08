type callBack = () => void

export function debounce(callback: callBack, delay: number) {
  let timer: NodeJS.Timeout | null
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callback()
      timer = null
    }, delay)
  }
}
