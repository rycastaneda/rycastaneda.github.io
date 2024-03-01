import React from "react"
import ChallengeCard from "./ChallengeCard"

const Challenge = ({ challenges }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="grid grid-cols-1 bg-sides relative challenges">
      <h1 className="text-3xl py-8 pl-4 sticky top-0 left-0 text-black z-20">
        Challenges
      </h1>

      <div className="flex flex-wrap lg:px-28">
        {challenges.map((challenge, i) => (
          <ChallengeCard
            panelClass={`${i % 2 === 0 ? "" : "panel lg:pl-2 lg:pr-2"}`}
            key={challenge.node.id}
            {...challenge.node.frontmatter}
            description={challenge.node.html}
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

export default Challenge
