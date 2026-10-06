// Linear icons drawn on a 24px grid to match the Iconsax set used in the app designs.
const ICONS = {
  arrowRight: <path d="M14.4 5.9 20.5 12l-6.1 6.1M3.5 12h16.8" />,
  arrowLeft: <path d="M9.6 5.9 3.5 12l6.1 6.1M20.5 12H3.7" />,
  arrowUpRight: <path d="M6.5 17.5 17.5 6.5M8.5 6.5h9v9" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  chevronLeft: <path d="m15 18-6-6 6-6" />,
  chevronRight: <path d="m9 18 6-6-6-6" />,
  play: <path d="M7 6.2v11.6c0 1.2 1.3 1.9 2.3 1.3l9.3-5.8c1-.6 1-2 0-2.6L9.3 4.9C8.3 4.3 7 5 7 6.2Z" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  search: <><circle cx="11" cy="11" r="7.5" /><path d="m20.5 20.5-4-4" /></>,
  filter: <path d="M4 6.5h10M18 6.5h2M4 17.5h2M10 17.5h10M14 4.5v4M10 15.5v4" />,
  calendar: <><rect x="3" y="4.5" width="18" height="16.5" rx="3.5" /><path d="M8 2.5v4M16 2.5v4M3 9.5h18" /></>,
  clock: <><circle cx="12" cy="12" r="9.5" /><path d="M12 7.5V12l3 2" /></>,
  location: <><path d="M12 21.5s-7-5.8-7-11.6a7 7 0 1 1 14 0c0 5.8-7 11.6-7 11.6Z" /><circle cx="12" cy="10" r="2.6" /></>,
  trendUp: <path d="m3 17 6-6 4 4 8-8M15 7h6v6" />,
  chart: <path d="M3.5 3.5v14a3 3 0 0 0 3 3h14M8 15.5v-3M12.5 15.5v-7M17 15.5V11" />,
  people: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.7a3.5 3.5 0 0 1 0 6.6M18.6 14.3a6.5 6.5 0 0 1 2.9 5.7" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  shield: <><path d="M12 2.5 4.5 5.3v6.2c0 4.6 3.2 8.6 7.5 10 4.3-1.4 7.5-5.4 7.5-10V5.3L12 2.5Z" /><path d="m9 12 2.1 2.1 4.1-4.1" /></>,
  wallet: <><rect x="2.5" y="6.5" width="19" height="14" rx="3.5" /><path d="M2.5 11h19M16.5 15.5h1.5M5.5 6.5l9-3.6c1-.4 2 .3 2 1.3v2.3" /></>,
  flash: <path d="M13.2 2.5 5 13.6h6.1l-1.3 7.9L18 10.4h-6.1l1.3-7.9Z" />,
  scan: <path d="M3 8.5v-2A3.5 3.5 0 0 1 6.5 3h2M15.5 3h2A3.5 3.5 0 0 1 21 6.5v2M21 15.5v2a3.5 3.5 0 0 1-3.5 3.5h-2M8.5 21h-2A3.5 3.5 0 0 1 3 17.5v-2M7 12h10" />,
  bell: <path d="M12 3.5a6 6 0 0 0-6 6v3.3l-1.6 3.4c-.3.7.2 1.3.9 1.3h13.4c.7 0 1.2-.6.9-1.3L18 12.8V9.5a6 6 0 0 0-6-6ZM9.5 20a2.6 2.6 0 0 0 5 0" />,
  heart: <path d="M12 20.2s-8.5-4.9-8.5-11.1A4.6 4.6 0 0 1 12 6.3a4.6 4.6 0 0 1 8.5 2.8c0 6.2-8.5 11.1-8.5 11.1Z" />,
  share: <><path d="M12 15V3.5M8 7.5l4-4 4 4" /><path d="M8.5 11H7a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-1.5" /></>,
  building: <><path d="M2.5 21h19M4.5 21V9.5L12 4l7.5 5.5V21" /><path d="M9.5 21v-5.5h5V21M9 11h.01M15 11h.01" /></>,
  grid: <><rect x="3" y="3" width="7.5" height="7.5" rx="2" /><rect x="13.5" y="3" width="7.5" height="7.5" rx="2" /><rect x="3" y="13.5" width="7.5" height="7.5" rx="2" /><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" /></>,
  routing: <><circle cx="5.5" cy="5.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /><path d="M8 5.5h7.8a3.2 3.2 0 0 1 0 6.5H8.2a3.2 3.2 0 0 0 0 6.5H16" /></>,
  target: <><circle cx="12" cy="12" r="9.5" /><circle cx="12" cy="12" r="5.5" /><circle cx="12" cy="12" r="1.5" /></>,
  lamp: <><path d="M5 3.5h14l-1.5 6h-11L5 3.5Z" /><path d="M12 9.5v11M8 20.5h8M8.5 6.5h.01M12 6.5h.01M15.5 6.5h.01" /></>,
  car: <><path d="m5.2 10.5 1.5-4.5a2 2 0 0 1 1.9-1.4h6.8a2 2 0 0 1 1.9 1.4l1.5 4.5" /><rect x="3" y="10.5" width="18" height="6.5" rx="2.5" /><path d="M6 17v2.5M18 17v2.5M7 13.7h.01M17 13.7h.01" /></>,
  drop: <path d="M12 3s6.5 6.6 6.5 11.2a6.5 6.5 0 0 1-13 0C5.5 9.6 12 3 12 3Z" />,
  coffee: <><path d="M4 9h12v4.5a5.5 5.5 0 0 1-5.5 5.5h-1A5.5 5.5 0 0 1 4 13.5V9Z" /><path d="M16 10.5h1.2a2.8 2.8 0 0 1 0 5.6H16M8 3v2.5M12 3v2.5" /></>,
  ticket: <><path d="M3 9.5v-2A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v2a2.5 2.5 0 0 0 0 5v2a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5v-2a2.5 2.5 0 0 0 0-5Z" /><path d="M15 5v14" strokeDasharray="2 2.5" /></>,
  home: <path d="M3.5 10.5 12 3.5l8.5 7V19a2 2 0 0 1-2 2H15v-6H9v6H5.5a2 2 0 0 1-2-2v-8.5Z" />,
  compass: <><circle cx="12" cy="12" r="9.5" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></>,
  sparkle: <path d="M12 3Q13 11 21 12Q13 13 12 21Q11 13 3 12Q11 11 12 3Z" />,
  star: <path fill="currentColor" stroke="none" d="m12 3.2 2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.6l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8L12 3.2Z" />,
}

export default function Icon({ name, size = 20, strokeWidth = 1.6, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {ICONS[name]}
    </svg>
  )
}
