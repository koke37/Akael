
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'One Page | Next.js',
  description: 'Single page with smooth scroll and sections',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900 bg-white">{children}</body>
    </html>
  )
}
