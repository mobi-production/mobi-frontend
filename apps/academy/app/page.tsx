import { Button } from '@repo/ui'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Button
        className='border-[2px] border-black'
        size='medium'
        intent='primary'>
        academy
      </Button>
    </main>
  )
}
