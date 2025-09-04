'use client'

import { useConversation, Role } from '@elevenlabs/react'
import { useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import orb_styles from './orb.module.css'

export function Conversation() {
  const conversation = useConversation({
    onConnect: () => console.log('Connected'),
    onDisconnect: () => console.log('Disconnected'),
    onMessage: (message: { message: string; source: Role }) =>
      console.log('Message:', message),
    onError: (error: string) => console.error('Error:', error)
  })

  const startConversation = useCallback(async () => {
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true })

      // Start the conversation with your agent
      await conversation.startSession({
        connectionType: 'websocket', // or 'polling'
        agentId: 'agent_6201k46903t8ff5r9n967b0psvn0',
        dynamicVariables: { company: 'Mavi', candidate: 'Molly Liu' }
      })
    } catch (error) {
      console.error('Failed to start conversation:', error)
    }
  }, [conversation])

  const stopConversation = useCallback(async () => {
    await conversation.endSession()
  }, [conversation])

  const renderControls = () => {
    if (conversation.status === 'disconnected') {
      return (
        <Button
          variant={'outline'}
          className={
            'rounded-full bg-primary hover:bg-primary/80 text-white cursor-pointer'
          }
          size={'lg'}
          onClick={startConversation}
        >
          Start Interview
        </Button>
      )
    }
    return (
      <Button
        variant={'outline'}
        className={
          'rounded-full bg-white hover:bg-primary/10 text-primary cursor-pointer'
        }
        size={'lg'}
        onClick={stopConversation}
      >
        Stop Interview
      </Button>
    )
  }

  return (
    <div className={'flex justify-center items-center gap-x-4'}>
      <Card className={'rounded-3xl'}>
        <CardContent>
          <CardHeader>
            <CardTitle className={'text-center'}>
              {conversation.status === 'connected'
                ? conversation.isSpeaking
                  ? `Agent is speaking`
                  : 'Agent is listening'
                : 'Waiting to start'}
            </CardTitle>
          </CardHeader>
          <div className={'flex flex-col gap-y-4 text-center'}>
            <div
              className={cn(
                'my-4 mx-12',
                orb_styles.orb,
                conversation.status === 'connected' && conversation.isSpeaking
                  ? `${orb_styles.orb_active} ${orb_styles.animate_orb}`
                  : conversation.status === 'connected'
                    ? `${orb_styles.orb_active} ${orb_styles.animate_orb_slow}`
                    : orb_styles.orb_inactive
              )}
            ></div>

            {renderControls()}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
