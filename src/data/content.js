import stadiumNight from '../assets/photos/stadium-night.jpg'
import bannerCricket from '../assets/photos/banner-cricket.jpg'
import bannerBadminton from '../assets/photos/banner-badminton.jpg'
import sportFootball from '../assets/photos/sport-football.jpg'
import sportCricket from '../assets/photos/sport-cricket.jpg'
import sportBadminton from '../assets/photos/sport-badminton.jpg'
import sportTennis from '../assets/photos/sport-tennis.jpg'
import sportBasketball from '../assets/photos/sport-basketball.jpg'
import sportSwimming from '../assets/photos/sport-swimming.jpg'

export const OWNER_LOGIN_URL = 'https://candid-lamington-97f395.netlify.app/login'

// Login is hidden for now. Set to true to bring back the header / mobile-menu
// "Log in" links and the "Open the owner dashboard" button.
export const SHOW_LOGIN = false

// Pricing is hidden for now. Set to true to bring back the Plans section,
// its nav/footer links, and the plan picker in the owner form.
export const SHOW_PLANS = false

// Links are rooted at the site base so they work from the legal pages too.
// On the home page, "/#features" is a same-page jump, not a reload.
const BASE = import.meta.env.BASE_URL
export const homeHref = (hash = '') => `${BASE}${hash}`

export const pageLinks = {
  home: homeHref('#top'),
  terms: `${BASE}terms/`,
  privacy: `${BASE}privacy/`,
}

export const navLinks = [
  { href: homeHref('#solution'), label: 'The solution' },
  { href: homeHref('#how-it-works'), label: 'How it works' },
  { href: homeHref('#features'), label: 'Features' },
  ...(SHOW_PLANS ? [{ href: homeHref('#plans'), label: 'Plans' }] : []),
]

export const sports = [
  { name: 'Football', image: sportFootball },
  { name: 'Cricket', image: sportCricket },
  { name: 'Badminton', image: sportBadminton },
  { name: 'Tennis', image: sportTennis },
  { name: 'Basketball', image: sportBasketball },
  { name: 'Swimming', image: sportSwimming },
]

export const enrollmentSteps = ['Tell us about your venue', 'We configure your workspace', 'Start filling your courts']

export const problems = [
  { id: '01', title: 'Empty slots', copy: 'Your best hours disappear into calls, spreadsheets, and last-minute cancellations.', icon: 'clock', tone: 'amber' },
  { id: '02', title: 'Scattered operations', copy: 'Managers, walk-ins, online bookings, and payments live in different places.', icon: 'routing', tone: 'red' },
  { id: '03', title: 'Unknown customers', copy: 'You take bookings, but do not have a clear view of who returns or why.', icon: 'people', tone: 'violet' },
]

export const flowSteps = [
  { title: 'Customer books', copy: 'Customers discover, compare, and book a real slot.', screenLabel: 'Customer app: selecting a 7 PM slot on Turf A' },
  { title: 'Manager checks in', copy: 'Managers see the same calendar and run the venue floor.', screenLabel: 'Manager app: booking ticket checked in with a QR scan' },
  { title: 'Owner grows', copy: 'Owners see the business, improve the experience, and scale.', screenLabel: 'Owner app: weekly revenue, bookings, and utilization' },
]

export const features = [
  { id: '01', title: 'Customer storefront', copy: 'Help players discover venues by sport, location, photos, facilities, reviews, and live availability.', icon: 'search', tone: 'blue' },
  { id: '02', title: 'Live court inventory', copy: 'Manage courts, open hours, slot status, base prices, and peak or weekend pricing rules.', icon: 'calendar', tone: 'green' },
  { id: '03', title: 'Manager operations', copy: 'Give your team one flow for bookings, QR check-ins, ticket lookup, cancellations, and walk-ins.', icon: 'scan', tone: 'violet' },
  { id: '04', title: 'Revenue visibility', copy: 'Track daily revenue, bookings, utilization, profitability, and performance across every venue.', icon: 'chart', tone: 'lime' },
  { id: '05', title: 'Connected customer data', copy: 'See booking history, repeat customers, favorites, notifications, and the signals behind demand.', icon: 'people', tone: 'amber' },
  { id: '06', title: 'Ready to scale', copy: 'Assign admins and managers, protect access by role, and run one stadium or an entire network.', icon: 'shield', tone: 'sky' },
]

export const dashboardNav = [
  { label: 'Dashboard', icon: 'grid' },
  { label: 'Analytics', icon: 'chart' },
  { label: 'Stadiums', icon: 'building' },
  { label: 'Managers', icon: 'people' },
  { label: 'Customers', icon: 'user' },
  { label: 'Billing', icon: 'wallet' },
]

export const dashboardStats = [
  { label: "Today's revenue", value: '₹18,450', delta: '+12%', icon: 'wallet', tone: 'green' },
  { label: "Today's bookings", value: '27', delta: '+4', icon: 'calendar', tone: 'blue' },
  { label: 'Revenue this month', value: '₹4,12,300', delta: '+18%', icon: 'trendUp', tone: 'lime' },
  { label: 'Total bookings', value: '1,284', icon: 'ticket', tone: 'violet' },
  { label: 'Active stadiums', value: '11', icon: 'building', tone: 'amber' },
  { label: 'Managers', value: '4', icon: 'people', tone: 'sky' },
]

// Daily revenue for September, in thousands of rupees.
export const revenueSeries = [9, 11, 10, 12, 14, 18, 17, 11, 12, 13, 12, 15, 19, 21, 13, 14, 13, 16, 17, 22, 24, 15, 16, 15, 18, 19, 23, 26, 17, 18]

export const slotUtilization = { booked: 288, total: 400 }

export const plans = [
  { name: 'Free', price: 0, commission: '8% per booking', description: 'Get discovered and start taking bookings.', features: ['Stadium profile and listing', 'Online booking calendar', 'Manager access', 'Core booking reports'], action: 'Claim free setup' },
  { name: 'Premium', price: 1999, commission: '7% per booking', description: 'See demand clearly and grow every court.', features: ['Everything in Free', 'Multiple courts and venues', 'Demand and customer insights', 'Revenue and utilization reports', 'Priority support'], action: 'Grow with Premium', featured: true },
  { name: 'Exclusive', price: 2499, commission: '6% per booking', description: 'Run a serious venue business at scale.', features: ['Everything in Premium', 'Advanced booking optimization', 'Multi-location controls', 'Custom roles and permissions', 'Dedicated priority support'], action: 'Unlock Exclusive' },
]

export const YEARLY_DISCOUNT = 0.2

export const locationCampaigns = {
  Bengaluru: { area: 'Indiranagar', sport: 'Football', offer: 'Book your evening turf', message: 'Your next game is closer than you think.', tone: 'green', audience: 'Players within 5 km', image: stadiumNight },
  Mumbai: { area: 'Andheri West', sport: 'Cricket', offer: 'Weekend cricket slots open', message: 'Get your team together. We have the pitch.', tone: 'blue', audience: 'Cricket teams nearby', image: bannerCricket },
  Hyderabad: { area: 'Gachibowli', sport: 'Badminton', offer: 'Fresh courts, one tap away', message: 'Your next rally starts here.', tone: 'violet', audience: 'Racquet players nearby', image: bannerBadminton },
}
