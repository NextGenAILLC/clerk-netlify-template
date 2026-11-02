import { SignUp } from '@clerk/nextjs'
import Head from 'next/head'

const SignUpPage = () => (
  <main className="auth-page">
    <Head><title>Create your account | Clerk + Netlify Starter</title></Head>
    <div className="auth-intro"><p className="eyebrow">Get started</p><h1>Make your next idea feel official.</h1><p>Create an account to see the complete Clerk-powered profile experience.</p></div>
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" redirectUrl="/user-profile" />
  </main>
)

export default SignUpPage
