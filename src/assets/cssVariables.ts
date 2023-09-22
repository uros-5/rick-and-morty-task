const randomTranslate = [
  [-15, -10],
  [30, 40]
]
function itemDelay(index: number): string {
  let delay = ((index % 20) / 20) * 0.45
  return `--item-delay: ${delay}s;`
}

function itemTranslate(): string {
  const random = Math.floor(Math.random() * 2)
  const item = randomTranslate[random]
  return `--item-translate: ${item[0]}px, ${item[1]}px;`
}

export function cssVariables(index: number): string {
  return itemDelay(index) + itemTranslate();
}
