const usePortfolio = () => {
  const handleClickRedirect = (path: string) => {
    window.open(path, '_blank')
  }
  return { onClickRedirect: handleClickRedirect }
}

export default usePortfolio
