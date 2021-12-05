import React from "react"
import "../styles/home.css"
const ContactCard = ({
  picture,
  name,
  email,
  label,
  region,
  phone,
  headline,
}) => {
  return (
    <div className="bg-white rounded-r-xl sm:rounded-xl overflow-hidden flex p-8">
      <div className="relative z-10 overflow-hidden flex-none -m-8 mr-8 w-56 h-auto">
        <img
          src={picture}
          className="absolute transform max-w-none object-cover bg-gray-100 w-full h-full left-0 top-0"
          alt=""
        ></img>
      </div>
      <div className="description max-w-xs  flex flex-col justify-between">
        <section>
          <h2 className="pb-1">{name}</h2>
          <p>{label}</p>
          <p>
            <i className="bi bi-envelope pr-1"></i>
            <a href={"mailto:" + email}>{email}</a>
          </p>
          <p>
            <i className="bi bi-phone pr-1"></i>
            {phone}
          </p>
          <p>
            <i className="bi bi-geo-alt  pr-1"></i>
            {region}
          </p>
          <p
            className="font-mono text-sm my-3"
            dangerouslySetInnerHTML={{ __html: headline }}
          ></p>
        </section>
        <section>
          <a href="/cv">Click here for my full CV.</a>
        </section>
      </div>
    </div>
  )
}

export default ContactCard
