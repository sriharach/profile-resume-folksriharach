// hooks
import useResponsive from './useResponsive'

const useAbout = () => {
  // hooks
  const { width } = useResponsive()

  const handleClickDownloadCV = () => {
    fetch('cv-sriharach.pdf').then((res) => {
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob)
        const alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'cv-sriharach.pdf'
        alink.click()
      })
    })
  }
  return { onClickDownloadCV: handleClickDownloadCV, isMobileResponsive: width < 768 }
}

export default useAbout
