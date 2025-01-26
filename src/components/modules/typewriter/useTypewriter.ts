import { useEffect, useState } from 'react'

const usetypewriter = (text: string[] | string, delay: number = 100) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    if (Array.isArray(text)) {
      if (textIndex < text.length) {
        if (currentIndex < text[textIndex].length) {
          const timeout = setTimeout(() => {
            setCurrentText(
              (prevText) => prevText + text[textIndex][currentIndex],
            )
            setCurrentIndex((prevIndex) => prevIndex + 1)
          }, delay)

          return () => clearTimeout(timeout)
        } else {
          setTimeout(() => {
            setCurrentText('')
            setCurrentIndex(0)
            setTextIndex((prevTextIndex) => (prevTextIndex + 1) % text.length)
          }, delay * 2)
        }
      }
    } else {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + text[currentIndex])
          setCurrentIndex((prevIndex) => prevIndex + 1)
        }, delay)

        return () => clearTimeout(timeout)
      } else {
        setTimeout(() => {
          setCurrentText('')
          setCurrentIndex(0)
          setTextIndex((prevTextIndex) => (prevTextIndex + 1) % text.length)
        }, delay * 2)
      }
    }
  }, [currentIndex, textIndex, delay, text])

  return { currentText }
}

export default usetypewriter
