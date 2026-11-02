import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const Header = () => (
  <header className="site-header">
    <nav className="site-nav" aria-label="Main navigation">
      <Link href="/" className="brand" aria-label="Clerk home">
        <span className="brand-mark" aria-hidden="true">C</span>
        <span>Clerk</span>
      </Link>

      <div className="nav-actions">
        <SignedOut>
          <SignInButton>
            <button className="button button-ghost" type="button">Sign in</button>
          </SignInButton>
          <SignUpButton>
            <button className="button button-primary button-compact" type="button">Get started</button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <Link href="/user-profile" className="button button-ghost">Account</Link>
          <UserButton
            userProfileMode="navigation"
            userProfileUrl="/user-profile"
            afterSignOutUrl="/"
          />
        </SignedIn>
      </div>
    </nav>
  </header>
)

export default Header
