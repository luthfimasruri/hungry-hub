const useURL = () => {
  const pathToURL = (path) => {
    const url = new URL(path, import.meta.env.VITE_API_BASE_URL)
    return url.href
  }

  return {
    pathToURL,
  }
}

export default useURL
