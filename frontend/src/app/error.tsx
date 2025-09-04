'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pb-12">
      <Image
        src="/mavi.png"
        alt="Mavi Logo"
        width={100}
        height={50}
        className="mb-8 mt-8 ml-auto mr-auto"
      />

      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-red-600">Error</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-stone-600">{error.message}</p>
          <p className="text-sm text-stone-500">
            Please provide a candidate name in the URL:
            <br />
            <code className="text-xs bg-stone-100 px-2 py-1 rounded">
              ?candidate=Your%20Name
            </code>
          </p>
          <Button onClick={() => reset()} variant="outline">
            Try again
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}
