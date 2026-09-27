import { useEffect } from 'react'

// Pages render on the client, so when someone arrives on a URL like
// "/#features" or "/privacy/#your-rights" the target does not exist yet and the
// browser's own jump does nothing. Scroll to it once the page has rendered, and
// again after web fonts load (which can shift layout) unless the visitor has
// already scrolled somewhere else.
export default function useScrollToHash() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return undefined

    let cancelled = false
    let landedAt = null
    const jump = () => {
      const target = document.getElementById(id)
      if (!target || cancelled) return
      target.scrollIntoView({ behavior: 'instant', block: 'start' })
      landedAt = window.scrollY
    }

    const frame = window.requestAnimationFrame(jump)
    document.fonts?.ready.then(() => {
      if (landedAt === null || Math.abs(window.scrollY - landedAt) < 2) jump()
    })

    return () => {
      cancelled = true
      window.cancelAnimationFrame(frame)
    }
  }, [])
}
