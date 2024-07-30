import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Welcome to Drafts</h2>
      <Link href="/drafts" className="bg-blue-500 text-white px-4 py-2 rounded">
        View Drafts
      </Link>
    </div>
  )
}