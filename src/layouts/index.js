import React from "react"
import Helmet from "react-helmet"

const Layout = ({ children, data }) => (
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
    ></link>
    <div>{children}</div>
  </div>
)

export default Layout
