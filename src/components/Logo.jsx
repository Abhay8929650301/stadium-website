import { pageLinks } from '../data/content.js'

export default function Logo({ href = pageLinks.home }) {
  return (
    <a className="logo" href={href}>
      <span className="logo-mark" aria-hidden="true">P</span>
      <span>PlayArena</span>
    </a>
  )
}
