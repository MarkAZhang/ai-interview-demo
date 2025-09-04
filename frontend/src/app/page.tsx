import { Conversation } from '@/components/conversation'
import Image from 'next/image'

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

export default function Home() {
  const candidateName = 'Mark Zhang'
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pb-12">
      <Header candidateName={candidateName} />
      <Conversation />
    </main>
  )
}
