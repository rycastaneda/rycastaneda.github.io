import React from "react";
import Helmet from "react-helmet";

// Define types for the props
interface LayoutProps {
  children: React.ReactNode;
  data: {
    name: string;
    summary: string;
  };
}

const Layout: React.FC<LayoutProps> = ({ children, data }) => (
  <div className="bg-gray-300">
    <Helmet
      title={data.name}
      meta={[
        {
          name: "description",
          content: data.summary,
        },
        { name: "keywords", content: "frontend dev, react, blog" },
      ]}
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,600,600i"
    />
    <div>{children}</div>
  </div>
);

export default Layout;
