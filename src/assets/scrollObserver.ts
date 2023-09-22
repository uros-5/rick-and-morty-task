export function scrollObserver(fn: (arg: IntersectionObserverEntry) => void): IntersectionObserver {
  return new IntersectionObserver(
    ([entry]) => fn(entry),
    { threshold: 0.5 }
  )
}
