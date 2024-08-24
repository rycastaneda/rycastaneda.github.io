import React from "react";

// Define the structure of each highlight
interface WorkHighlight {
  [index: number]: string; // Since highlights is an array of strings
}

// Define the structure of each work node
interface WorkNode {
  company: string;
  website?: string;
  position: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights: WorkHighlight;
}

// Define the structure of the work prop
interface WorkEdge {
  node: WorkNode;
}

// Define the props for the Work component
interface WorkProps {
  work: WorkEdge[];
}

const Work: React.FC<WorkProps> = ({ work }) => {
  const workEl = work.map((work, i) => {
    const url = work.node.website ? (
      <a href={work.node.website}>{work.node.company}</a>
    ) : null;

    const highlights = work.node.highlights.map((highlight, i) => (
      <li key={i} className="list-disc">
        {highlight}
      </li>
    ));

    return (
      <div key={i}>
        <h1 className="font-bold text-2xl">{url}</h1>
        <h4 className="mt-4 text-gray-700">{work.node.position}</h4>
        <p className="italic mb-2 text-gray-700">
          {work.node.startDate} — {work.node.endDate || "present"}
        </p>
        <p>{work.node.summary}</p>
        <ul className="text-md font-mono pl-8 py-4">{highlights}</ul>
      </div>
    );
  });

  return (
    <div>
      <h1 className="font-bold font-mono my-4 text-2xl">Work Experience</h1>
      {workEl}
    </div>
  );
};

export default Work;
