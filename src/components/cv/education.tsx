import React from "react";

// Define types for education node
interface EducationNode {
  institution: string;
  startDate: string;
  endDate: string;
  studyType: string;
  area: string;
}

// Define the structure of education edges
interface EducationEdge {
  node: EducationNode;
}

// Define the props for the Education component
interface EducationProps {
  education: EducationEdge[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  const educationElements = education.map((school, i) => (
    <div key={i}>
      <h2 className="font-bold">{school.node.institution}</h2>
      <p className="italics mb-2">
        {school.node.startDate} — {school.node.endDate}
      </p>
      <p>
        {school.node.studyType} in {school.node.area}
      </p>
    </div>
  ));

  return (
    <div>
      <h1 className="font-bold font-mono my-4 text-2xl">Education</h1>
      {educationElements}
    </div>
  );
};

export default Education;
