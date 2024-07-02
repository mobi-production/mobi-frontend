type GroupType = 'firstGroup' | 'secondGroup' | 'thirdGroup' | 'fourthGroup'
type BorderRadius = 'none' | 'tl' | 'tr' | 'both'

const borderRadiusMap: Record<number, BorderRadius> = {
  0: 'tl',
  1: 'none',
  2: 'tr'
}

export function getBorderRadius(group: GroupType, index: number): BorderRadius {
  if (group === 'firstGroup' || group === 'secondGroup') {
    return borderRadiusMap[index % 3] ?? 'none'
  }

  return 'both'
}
