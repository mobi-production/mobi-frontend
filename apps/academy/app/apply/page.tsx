import type { Metadata, ResolvingMetadata } from 'next'

import { ApplyPage } from '@/view'

export async function generateMetadata(_: unknown, parent: ResolvingMetadata): Promise<Metadata> {
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: 'Mobi | 지원하기',
    description: '현재 모비는 모집 기간이 아닙니다.',
    openGraph: {
      images: ['/og/apply.png', ...previousImages]
    }
  }
}

export default function Page() {
  return <ApplyPage />
}
