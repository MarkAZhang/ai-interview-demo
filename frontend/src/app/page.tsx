'use client'

import { Conversation } from '@/components/conversation'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const Header = ({ candidateName }: { candidateName: string }) => {
  return (
    <>
      <Image
        src="/mavi.png"
        alt="Mavi Logo"
        width={100}
        height={50}
        className="mb-8 mt-8 ml-auto mr-auto"
      />

      <h1 className="text-2xl font-bold mb-1 text-center tracking-wider text-stone-700">
        Behavioral Interview
      </h1>
      <p className="mb-8 text-center text-md text-stone-500">
        Candidate: {candidateName}
      </p>
    </>
  )
}

function HomeContent() {
  const searchParams = useSearchParams()
  const candidateName = searchParams.get('candidate')

  if (!candidateName) {
    throw new Error('no candidate name provided')
  }

  const decodedCandidateName = decodeURIComponent(candidateName)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pb-12">
      <Header candidateName={decodedCandidateName} />
      <Conversation candidateName={decodedCandidateName} />
    </main>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  )
}
