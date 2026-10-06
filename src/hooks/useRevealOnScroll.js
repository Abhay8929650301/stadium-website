import { useEffect } from 'react'

// Fades `.reveal` elements in the first time they enter the viewport.
// Without IntersectionObserver the content simply stays visible.
export default function useRevealOnScroll() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined

    const root = document.documentElement
    const items = document.querySelectorAll('.reveal:not(.is-visible)')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

    root.classList.add('js-reveal')
    items.forEach((item) => observer.observe(item))

    return () => {
      observer.disconnect()
      root.classList.remove('js-reveal')
    }
  }, [])
}
