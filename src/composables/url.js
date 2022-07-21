const useURL = () => {
  const pathToURL = (path) => {
    return `${import.meta.env.VITE_API_BASE_URL}${path}`
  }

  return {
    pathToURL,
  }
}

export { useURL }
export default useURL
