import React from "react";
import ChallengeCard from "./ChallengeCard";

// Define the structure of frontmatter data for challenges
interface ChallengeFrontmatter {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  image_url?: string;
  background?: string;
  background_color?: string;
  class?: string;
  link?: string;
  stack?: string;
  disabled?: boolean;
}

// Define the structure of a challenge node
interface ChallengeNode {
  id: string;
  html: string;
  frontmatter: ChallengeFrontmatter;
}

// Define the type for the challenges prop
interface ChallengeProps {
  challenges: {
    node: ChallengeNode;
  }[];
}

const Challenge: React.FC<ChallengeProps> = ({ challenges }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        className="text-3xl py-8 pl-4 sticky bottom-0 right-0 cursor-pointer group animate-bounce text-black flex"
      >
        <i className="bi bi-arrow-up ml-auto mr-8 group-hover:text-red-400">
          {" "}
        </i>
      </button>
    </div>
  );
};

export default Challenge;
