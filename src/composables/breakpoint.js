import { onMounted, reactive } from 'vue'

const screens = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}

const breakpoint = reactive({ w: 0, h: 0, is: 'xs' })

const xs = (val) => val >= screens.xs && val < screens.sm
const sm = (val) => val >= screens.sm && val < screens.md
const md = (val) => val >= screens.md && val < screens.lg
const lg = (val) => val >= screens.lg && val < screens.xl
const xl = (val) => val >= screens.xl

const getBreakpoint = (w) => {
  if (xs(w)) return 'xs'
  else if (sm(w)) return 'sm'
  else if (md(w)) return 'md'
  else if (lg(w)) return 'lg'
  else if (xl(w)) return 'xl'
  else return 'all'
}

const setBreakpoint = () => {
  breakpoint.w = window.innerWidth
  breakpoint.h = window.innerHeight
  breakpoint.is = getBreakpoint(window.innerWidth)
}

const useBreakpoint = () => {
  onMounted(() => {
    setBreakpoint()
    window.addEventListener('resize', () => {
      setBreakpoint()
    })
  })

  const isMobile = () => ['all', 'xs'].includes(breakpoint.is)
  const isTablet = () => ['sm', 'md'].includes(breakpoint.is)
  const isDesktop = () => ['lg', 'xl'].includes(breakpoint.is)

  const xsOnly = () => breakpoint.is === 'xs'
  const smOnly = () => breakpoint.is === 'sm'
  const mdOnly = () => breakpoint.is === 'md'
  const lgOnly = () => breakpoint.is === 'lg'
  const xlOnly = () => breakpoint.is === 'xl'

  const xsAndUp = () => ['xs', 'sm', 'md', 'lg', 'xl'].includes(breakpoint.is)
  const smAndUp = () => ['sm', 'md', 'lg', 'xl'].includes(breakpoint.is)
  const mdAndUp = () => ['md', 'lg', 'xl'].includes(breakpoint.is)
  const lgAndUp = () => ['lg', 'xl'].includes(breakpoint.is)
  const xlAndUp = () => ['xl'].includes(breakpoint.is)

  const xsAndDown = () => ['all', 'xs'].includes(breakpoint.is)
  const smAndDown = () => ['all', 'xs', 'sm'].includes(breakpoint.is)
  const mdAndDown = () => ['all', 'xs', 'sm', 'md'].includes(breakpoint.is)
  const lgAndDown = () =>
    ['all', 'xs', 'sm', 'md', 'lg'].includes(breakpoint.is)
  const xlAndDown = () =>
    ['all', 'xs', 'sm', 'md', 'lg', 'xl'].includes(breakpoint.is)

  return {
    isMobile,
    isTablet,
    isDesktop,
    xsOnly,
    smOnly,
    mdOnly,
    lgOnly,
    xlOnly,
    xsAndUp,
    smAndUp,
    mdAndUp,
    lgAndUp,
    xlAndUp,
    xsAndDown,
    smAndDown,
    mdAndDown,
    lgAndDown,
    xlAndDown,
    breakpoint,
  }
}

export { useBreakpoint }
export default useBreakpoint
