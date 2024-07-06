import type { CurriculumGroupType } from '@/types/landing'

type BorderRadius = 'none' | 'tl' | 'tr' | 'both'

const borderRadiusMap: Record<number, BorderRadius> = {
  0: 'tl',
  1: 'none',
  2: 'tr'
}

export function getBorderRadius(group: CurriculumGroupType, index: number): BorderRadius {
  if (group === 1 || group === 2) {
    return borderRadiusMap[index % 3] ?? 'none'
  }

  return 'both'
}
