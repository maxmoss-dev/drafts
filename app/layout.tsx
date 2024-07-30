import { Inter } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Drafts - GitHub-based Note-taking',
  description: 'A minimalist platform for creating, editing, and managing notes and research using GitHub',
  keywords: ['drafts', 'notes', 'research', 'GitHub', 'AI autocomplete'],
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-2xl font-bold">Drafts</h1>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
}