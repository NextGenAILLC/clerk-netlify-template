import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs'
import Head from 'next/head'
import Link from 'next/link'

const features = [
  ['Ready-made UI', 'Drop in polished sign-in, sign-up, and account-management screens without rebuilding authentication.'],
  ['Secure by default', 'Protect routes with middleware and keep identity checks close to the pages they protect.'],
  ['Built to extend', 'Start with a focused foundation and add organizations, roles, and more when your app needs them.'],
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Clerk + Netlify Starter</title>
        <meta name="description" content="A modern authentication starter powered by Clerk and Next.js." />
      </Head>

      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" />Authentication, without the detour</p>
            <h1>Build the part your users came for.</h1>
            <p className="hero-description">
              A thoughtful Next.js starter with Clerk authentication already connected. Ship a welcoming,
              secure account experience in minutes—not weeks.
            </p>
            <div className="hero-actions">
              <SignedOut>
                <SignUpButton>
                  <button className="button button-primary button-large" type="button">Create an account <span aria-hidden="true">→</span></button>
                </SignUpButton>
                <SignInButton>
                  <button className="text-button" type="button">I already have an account</button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Link className="button button-primary button-large" href="/user-profile">Open your profile <span aria-hidden="true">→</span></Link>
              </SignedIn>
            </div>
            <p className="trust-note">No credit card required <span aria-hidden="true">·</span> Start with the essentials</p>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="dashboard-card">
              <div className="card-window-bar"><span /><span /><span /></div>
              <div className="profile-preview">
                <div className="avatar-preview">A</div>
                <div><strong>Alex Morgan</strong><small>alex@example.com</small></div>
                <span className="status-pill">Active</span>
              </div>
              <div className="preview-line long" /><div className="preview-line" />
              <div className="preview-stat-row"><div><small>Member since</small><strong>Today</strong></div><div><small>Security</small><strong>Protected</strong></div></div>
            </div>
            <div className="floating-tag">✓ <span>Identity verified</span></div>
          </div>
        </section>

        <section className="feature-section shell" aria-labelledby="features-title">
          <div className="section-heading">
            <p className="eyebrow">Everything in place</p>
            <h2 id="features-title">A better first step for every app.</h2>
          </div>
          <div className="feature-grid">
            {features.map(([title, description], index) => (
              <article className="feature-card" key={title}>
                <span className="feature-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
