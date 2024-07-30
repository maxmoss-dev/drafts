'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Drafts() {
  const [drafts, setDrafts] = useState([])

  useEffect(() => {
    // Fetch drafts from GitHub API
    // This is a placeholder, you'll need to implement the actual API call
    setDrafts([
      { id: 1, title: 'Draft 1' },
      { id: 2, title: 'Draft 2' },
    ])
  }, [])

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Your Drafts</h2>
      <ul>
        {drafts.map((draft) => (
          <li key={draft.id} className="mb-2">
            <Link href={`/drafts/${draft.id}`} className="text-blue-500 hover:underline">
              {draft.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/drafts/new" className="bg-green-500 text-white px-4 py-2 rounded mt-4 inline-block">
        New Draft
      </Link>
    </div>
  )
}