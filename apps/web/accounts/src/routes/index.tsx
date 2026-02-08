import TechStack from '@/components/TechStack'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        <TechStack />
      </main>
    </div>
  )
}
