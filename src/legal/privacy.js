import { company as c } from './company.js'

// Blocks: a string renders as a paragraph; { list: [...] } renders as a bullet list.
// A list item can be a string or { label, text } for a bold lead-in.
const privacy = {
  slug: 'privacy',
  title: 'Privacy Policy',
  intro: `This policy explains what personal data ${c.brand} collects, why we collect it, who we share it with, and the choices and rights you have. It is written to meet India’s Digital Personal Data Protection Act, 2023.`,
  sections: [
    {
      id: 'overview',
      title: 'Who we are',
      blocks: [
        `${c.legalName} ("${c.brand}", "we", "us" or "our") operates the ${c.brand} website, owner dashboard, manager app and customer app (the "Services"). For the personal data described in this policy, we are the Data Fiduciary under the Digital Personal Data Protection Act, 2023 (the "DPDP Act").`,
        'This policy applies to venue owners, managers, players and anyone who contacts us or visits our website. It does not cover third-party websites or services that we link to.',
      ],
    },
    {
      id: 'data-we-collect',
      title: 'Personal data we collect',
      blocks: [
        {
          list: [
            { label: 'Enquiries.', text: 'When you ask us to set up your venue: your name, business email, phone number, venue name and city.' },
            { label: 'Account details.', text: 'Name, email address, phone number, role (owner, manager or player) and login details.' },
            { label: 'Venue details.', text: 'For venue owners: venue address, photos, courts, prices, opening hours, GSTIN, and the bank details we need to send payouts.' },
            { label: 'Bookings.', text: 'The venue, court, date and time booked, the player’s name and phone number, check-in status, amount paid and booking ID.' },
            { label: 'Payments.', text: 'Transaction reference, status and amount from our payment partners. Card numbers, CVV and UPI PINs are entered with those partners and are not stored by us.' },
            { label: 'Location.', text: 'With your permission, your device location, so we can show nearby venues and local offers. You can turn this off in your device settings at any time.' },
            { label: 'Device and usage data.', text: 'IP address, device and browser type, app version, pages and screens viewed, and crash reports.' },
            { label: 'Communications.', text: 'Messages you send us, feedback, and reviews you post.' },
          ],
        },
      ],
    },
    {
      id: 'how-we-use',
      title: 'How we use your data',
      blocks: [
        {
          list: [
            'to create and manage accounts, and to provide the Services;',
            'to process bookings, payments, refunds and venue payouts;',
            'to let venue managers check players in and run their venue;',
            'to send service messages, such as confirmations, reminders and account notices;',
            'to show nearby venues and relevant local offers;',
            'to send promotional messages, including offers from venues near you, where you have agreed to receive them;',
            'to respond to enquiries, including contacting venue owners about getting set up;',
            'to understand how the Services are used so we can improve them;',
            'to keep the Services secure and to prevent fraud and misuse;',
            'to meet our legal, tax and accounting obligations.',
          ],
        },
      ],
    },
    {
      id: 'legal-basis',
      title: 'Why we are allowed to use it',
      blocks: [
        'We process your personal data with your consent, which we ask for clearly and for specific purposes, or for a legitimate use permitted by section 7 of the DPDP Act. For example, we can process data you have voluntarily given us for a specific purpose, such as a booking, or where the law requires us to.',
        'Where we rely on consent, you can withdraw it at any time. Withdrawing consent does not affect processing that happened before you withdrew it, but it may mean we can no longer provide some parts of the Services.',
      ],
    },
    {
      id: 'sharing',
      title: 'Who we share it with',
      blocks: [
        'We do not sell your personal data. We share it only where needed:',
        {
          list: [
            { label: 'Venues you book with.', text: 'The venue owner and their managers see the booking details they need to serve you.' },
            { label: 'Service providers.', text: 'Companies that host our systems, process payments, send SMS, email and WhatsApp messages, provide analytics or support our customer service. They act on our instructions and may only use your data to provide their service to us.' },
            { label: 'Authorities.', text: 'Government, regulatory or law-enforcement bodies, when the law requires it.' },
            { label: 'Business changes.', text: 'A buyer or successor if our business is merged, acquired or restructured. This policy will continue to protect your data.' },
            { label: 'Anyone else, with your consent.', text: 'We will ask you first.' },
          ],
        },
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies and similar technologies',
      blocks: [
        'We use cookies and similar technologies that are needed for the Services to work, such as keeping you signed in, and, where enabled, to understand how the Services are used. You can control cookies through your browser settings. Blocking some of them may affect how the Services work.',
        'Our website loads fonts from Google Fonts. When it does, your browser connects to Google’s servers, which receive your IP address.',
      ],
    },
    {
      id: 'retention',
      title: 'How long we keep it',
      blocks: [
        'We keep personal data only for as long as we need it for the purposes in this policy. Account and venue data is kept while your account is active. After you close your account, or once the purpose is served, we delete or anonymise your data, except where the law requires us to keep it longer, for example tax and accounting records.',
        'If you send an enquiry and do not become a customer, we delete your details once they are no longer needed to respond to you.',
      ],
    },
    {
      id: 'security',
      title: 'How we protect it',
      blocks: [
        'We use reasonable security safeguards to protect personal data, including encryption in transit and role-based access, so managers see only what their role needs.',
        'No system is completely secure. If a personal data breach occurs, we will inform affected users and the Data Protection Board of India as the law requires.',
      ],
    },
    {
      id: 'your-rights',
      title: 'Your rights',
      blocks: [
        'Under the DPDP Act, you have the right to:',
        {
          list: [
            'get a summary of the personal data we hold about you and how we use it;',
            'correct, complete or update inaccurate or incomplete data;',
            'have your data erased when it is no longer needed, unless the law requires us to keep it;',
            'withdraw any consent you have given;',
            'have your grievances addressed;',
            'nominate someone to exercise these rights on your behalf in the event of your death or incapacity.',
          ],
        },
        `To use any of these rights, email ${c.privacyEmail}. We may need to verify your identity first, and we will respond within the time required by law. If you are not satisfied with our response, you can complain to the Data Protection Board of India.`,
      ],
    },
    {
      id: 'children',
      title: 'Children',
      blocks: [
        'Our Services are meant for people aged 18 and over. We process the personal data of anyone under 18 only with the verifiable consent of their parent or lawful guardian, and we do not track, behaviourally monitor or target advertising at children.',
        `If you believe a child has given us personal data without that consent, please contact ${c.privacyEmail} and we will delete it.`,
      ],
    },
    {
      id: 'transfers',
      title: 'Where your data is stored',
      blocks: [
        'Our service providers may store or process personal data on servers outside India. We transfer data outside India only as permitted by the DPDP Act and any restrictions the Government of India notifies under it.',
      ],
    },
    {
      id: 'changes',
      title: 'Changes to this policy',
      blocks: [
        'We may update this policy from time to time. We will post the updated version on this page with a new "last updated" date. If the changes are significant, we will also tell you by email or in the app.',
      ],
    },
    {
      id: 'contact',
      title: 'Grievance Officer and contact',
      blocks: [
        'If you have a question or complaint about this policy or how we handle your personal data, contact our Grievance Officer. We will acknowledge your complaint within 24 hours and aim to resolve it within 15 days.',
      ],
    },
  ],
}

export default privacy
