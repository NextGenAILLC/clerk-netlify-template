import { SignIn } from '@clerk/nextjs'
import Head from 'next/head'

const SignInPage = () => (
  <main className="auth-page">
    <Head><title>Sign in | Clerk + Netlify Starter</title></Head>
    <div className="auth-intro"><p className="eyebrow">Welcome back</p><h1>Your workspace is waiting.</h1><p>Sign in to manage your account and pick up right where you left off.</p></div>
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" redirectUrl="/user-profile" />
  </main>
)

export default SignInPage
