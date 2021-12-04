import React from "react"
import "../styles/nbl.css"
const Nbl = () => {
  return (
    <div
      className="nbl-container panel"
      style={{ backgroundImage: "./nbl/nblresponsive.png" }}
    >
      <div className="gradient"></div>
      <div className="container">
        <div className="wrapper">
          <div className="image">
            <img src="./nbl/responsive.png"></img>
          </div>
          <div className="nbl-description">
            <h2 className="nbl-heading">NBL & NBL Store</h2>
            <p>
              Part of the frontend team that handled NBL which is Australia’s
              version of the NBA, in which we successfully delivered 1 month
              ahead of deadline. Page speed improved by about 5 secs of load
              time and had a 60% increase of site engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nbl
