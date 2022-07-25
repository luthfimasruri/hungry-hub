const useURL = () => {
  const pathToURL = (path) => {
    const pattern = new RegExp('^https?:\\/\\/')
    return pattern.test(path)
      ? path
      : `${import.meta.env.VITE_API_BASE_URL}${path}`
  }

  return {
    pathToURL,
  }
}

export { useURL }
export default useURL
