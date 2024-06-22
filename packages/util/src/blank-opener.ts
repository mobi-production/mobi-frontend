export const blankOpener = (target: string) => () => {
  if (window) {
    window.open(target)
  }
}
