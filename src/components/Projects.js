import _ from "lodash"
import React, { useEffect, useRef, useState } from "react"
import Project from "./Project"

const Projects = ({ projects }) => {
  const [sticky, setSticky] = useState("Present")
  const [, setOffset] = useState(0)
  const ref = useRef()

  const updateValue = _.debounce(val => {
    let found = false
    document.querySelectorAll("article").forEach(article => {
      if (isElementInViewport(article) && !found) {
        setSticky(article.getAttribute("year"))
        found = true
      }
    })
    setOffset(val)
  }, 100)

  const handleScroll = event => {
    updateValue(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect()
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth

    const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0
    const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0

    return vertInView && horInView
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div ref={ref} className="projects  grid grid-cols-1 bg-projects  relative">
      <h1 className="text-3xl py-8 pl-4 sticky top-0 left-0 text-black z-20">
        Projects - {sticky}
      </h1>

      <div className="flex flex-wrap lg:px-28">
        {projects.map((project, i) => (
          <Project
            panelClass={`${i % 2 === 0 ? "" : "panel lg:pl-2"}`}
            key={project.node.id}
            {...project.node.frontmatter}
            description={project.node.html}
          />
        ))}
      </div>

      <button
        onClick={scrollTop}
        className="text-3xl py-8 pl-4 sticky bottom-0 right-0 cursor-pointer group animate-bounce text-black  flex"
      >
        <i className="bi bi-arrow-up  ml-auto mr-8 group-hover:text-red-400">
          {" "}
        </i>
      </button>
    </div>
  )
}

export default Projects
