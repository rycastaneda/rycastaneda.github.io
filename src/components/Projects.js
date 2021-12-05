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
  }, [])

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect()
    return (
      rect.top >= -1 &&
      rect.left >= -1 &&
      rect.bottom <
        (window.innerHeight ||
          document.documentElement.clientHeight) /* or $(window).height() */ &&
      rect.right <
        (window.innerWidth ||
          document.documentElement.clientWidth) /* or $(window).width() */
    )
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div ref={ref} className="projects grid grid-cols-1 bg-projects  relative">
      <h1 className="text-3xl py-8 pl-4 sticky top-0 left-0 text-white z-20">
        Projects - {sticky}
      </h1>

      <div className="flex flex-wrap px-28">
        {projects.map((project, i) => (
          <Project
            panelClass={`${i % 2 === 0 ? "" : "panel pl-2"}`}
            key={project.node.id}
            {...project.node.frontmatter}
            description={project.node.html}
          />
        ))}
      </div>

      <h1
        onClick={scrollTop}
        className="text-3xl py-8 pl-4 sticky bottom-0 right-0 cursor-pointer text-white  flex"
      >
        <i className="bi bi-arrow-up animate-bounce ml-auto mr-8"> </i>
      </h1>
    </div>
  )
}

export default Projects
