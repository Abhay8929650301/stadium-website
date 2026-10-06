import { useCallback, useEffect, useRef, useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import OwnerForm from './OwnerForm.jsx'
import Toast from './Toast.jsx'
import useScrollToHash from '../hooks/useScrollToHash.js'
import '../App.css'

const NOTICE_DURATION = 3200

// Shared page chrome: header, footer, toast, and the owner enquiry form.
// `children` is a render function that receives the actions a page may need.
export default function SiteLayout({ children }) {
  const [notice, setNotice] = useState(null)
  const [form, setForm] = useState({ open: false, plan: 'Premium' })
  const noticeTimer = useRef(0)

  useScrollToHash()

  const notify = useCallback((message) => {
    window.clearTimeout(noticeTimer.current)
    setNotice({ id: Date.now(), message })
    noticeTimer.current = window.setTimeout(() => setNotice(null), NOTICE_DURATION)
  }, [])

  useEffect(() => () => window.clearTimeout(noticeTimer.current), [])

  const openForm = useCallback((plan = 'Premium') => setForm({ open: true, plan }), [])
  const startWithPremium = useCallback(() => openForm('Premium'), [openForm])
  const closeForm = useCallback(() => setForm((current) => ({ ...current, open: false })), [])

  const submitForm = useCallback((data) => {
    closeForm()
    const firstName = String(data.name ?? '').trim().split(/\s+/)[0]
    const venue = String(data.venue ?? '').trim()
    notify(`Thanks${firstName ? `, ${firstName}` : ''}. We'll contact you to set up ${venue || 'your venue'} on PlayArena.`)
  }, [closeForm, notify])

  return (
    <div className="site-shell" id="top">
      <Header onStart={startWithPremium} />
      <main>{children({ notify, openForm, startWithPremium })}</main>
      <Footer />
      <Toast notice={notice} />
      {form.open && <OwnerForm plan={form.plan} onClose={closeForm} onSubmit={submitForm} />}
    </div>
  )
}
