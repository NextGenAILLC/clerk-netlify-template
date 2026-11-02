import { UserProfile } from '@clerk/nextjs'
import Head from 'next/head'

const UserProfilePage = () => (
  <main className="profile-page">
    <Head><title>Your profile | Clerk + Netlify Starter</title></Head>
    <div className="profile-intro"><p className="eyebrow">Your account</p><h1>Profile settings</h1><p>Keep your details and sign-in methods up to date.</p></div>
    <UserProfile />
  </main>
)

export default UserProfilePage
