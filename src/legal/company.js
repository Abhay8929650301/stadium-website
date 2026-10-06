// Company details used by the Terms & Conditions and Privacy Policy pages.
// Replace every [bracketed] value before publishing. In development the legal
// pages log a console warning while any placeholder is still present.
export const company = {
  brand: 'PlayArena',
  legalName: '[Registered company name]',
  address: '[Registered office address]',
  supportEmail: '[support@your-domain.com]',
  privacyEmail: '[privacy@your-domain.com]',
  grievanceOfficer: '[Grievance Officer name]',
  grievanceEmail: '[grievance@your-domain.com]',
  jurisdictionCity: '[City]',
  effectiveDate: '27 September 2026',
  lastUpdated: '27 September 2026',
}

export const hasPlaceholders = Object.values(company).some((value) => value.includes('['))
