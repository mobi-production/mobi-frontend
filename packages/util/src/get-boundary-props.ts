export function getBoundaryProps(index: number, length: number) {
  return {
    isFirst: index === 0,
    isLast: index === length - 1,
    isSingle: length === 1
  }
}
