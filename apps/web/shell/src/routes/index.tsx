import { createFileRoute } from '@tanstack/react-router'
import { Header, Footer, Hero, QuickStart } from '@/components'
import React from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

const TechStack = React.lazy(() => import('Accounts/TechStack'))

function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
        <React.Suspense fallback={<div>Loading...</div>}>
          <TechStack />
        </React.Suspense>
        <QuickStart />
      </main>

      <Footer />
    </div>
  )
}
