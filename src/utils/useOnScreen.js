import { useEffect, useState } from "react"

export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false)

  console.log("ref", ref)
  // const observer = new IntersectionObserverEntry(([entry]) =>
  //   setIntersecting(entry.isIntersecting)
  // )

  useEffect(() => {
    // This effect uses the `value` variable,
    // so it "depends on" `value`.
    console.log(ref)
    setIntersecting(isElementInViewport(ref.current))
  }, [setIntersecting, ref])

  return isIntersecting
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect()

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /* or $(window).width() */
  )
}
