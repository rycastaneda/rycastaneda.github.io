import React from "react"
const Intro = ({ basics }) => {
  const profiles = basics.profiles.map((profile, i) => {
    let url = profile.url ? <a href={profile.url}>{profile.username}</a> : null
    return (
      <div key={i}>
        {profile.network ? <strong>{profile.network}: </strong> : null}
        {profile.username ? url : profile.username}
      </div>
    )
  })

  return (
    <div>
      <div className="flex justify-center">
        <img src={basics.picture} className="rounded-full" alt={basics.name} />
      </div>
      <h1 className="font-bold">{basics.name}</h1>
      <p className="italic mb-4 text-2xl">{basics.label}</p>

      <h1 className="font-bold font-mono my-4 text-2xl">Contact</h1>
      <div>
        <strong>Email: </strong>
        <a href={"mailto:" + basics.email}>{basics.email}</a>
      </div>
      <div>
        <strong>Phone: </strong>
        {basics.phone}
      </div>
      <div>
        <strong>Website: </strong>
        {basics.website}
      </div>
      {profiles}
    </div>
  )
}

export default Intro
