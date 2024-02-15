import React, { useEffect, useState } from "react"

const Project = ({
  title,
  link,
  date,
  image_url,
  background,
  background_color,
  description,
  panelClass,
  stack,
}) => {
  const [toggle, setToggle] = useState(false)

  const [backgroundImage, setBackgroundImage] = useState(background);

  useEffect(() => {
    const screenWidth =
      window.innerWidth || document.documentElement.clientWidth
    setToggle(screenWidth < 900)

    const fetchRandomImage = async () => {
      let images = [];
      await fetch(
        "https://api.pexels.com/v1/search?query=abstract&orientation=landscape&size=large&per_page=25",
        {
          headers: { 'Authorization': `0Yj9fnhb8D5ZsYMFnnOUwgw35xD4rviKaYpJJEwg6kkRzu0m60QViXAZ` }
        }).then(res => res.json())
        .then(json => {
          images = json['photos']
        })
      setBackgroundImage(images[Math.floor(Math.random() * images.length)]['src']['large'])
    }
    if(!background) {
      fetchRandomImage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setBackgroundImage, background])

  const techs = stack?.split(",").map((tech, i) => {
    return (
      <p
        className="rounded-full py-1 px-3 text-white bg-gray-700 text-xs mr-2"
        key={i}
      >
        {tech}
      </p>
    )
  })

  const img = backgroundImage ? (
    <img
      src={backgroundImage}
      className="absolute z-0 max-w-none object-cover bg-gray-100 w-full h-full left-0 top-0 mb-0"
      alt=""
    ></img>
  ) : (
    <div className="absolute z-0 max-w-none object-cover bg-gray-100 w-full h-full left-0 top-0 mb-0"></div>
  )

  return (
    <article
      year={date}
      className={` flex-grow lg:w-1/2 w-full flex flex-col justify-center align-middle min-h-screen ${panelClass}`}
    >
      <div
        className="relative overflow-hidden flex-none h-100"
        role="button"
        tabIndex={0}
        onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}
      >
        {background_color ? null : img}
        <div className="relative flex flex-col lg:justify-center h-full items-center z-10" style={{ backgroundColor: `#${background_color}` }}>
          <header className="flex justify-center h-28 mt-40 lg:mt-0">
            <img src={image_url} className="max-h-20 min-h-20 w-40" alt=""></img>
          </header>
        </div>

        <div
          className={`absolute transform bg-gray-50 bg-opacity-75 bg z-20 w-full ${
            toggle
              ? "lg:-translate-y-full translate-y-[-175%]"
              : "translate-y-0"
          } transition-transform`}
        >
          <div className="flex flex-col justify-center p-4">
            <h2 className="font-bold text-center py-2 text-md">
              {title || link}
            </h2>
            <section className="overflow-ellipsis overflow-hidden">
              <div
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              ></div>
              <div className="flex mt-2">
                <p className="rounded-full py-1 px-3 bg-gray-700 text-white mr-2 p-2 text-xs">
                  HTML+CSS
                </p>
                {techs}
              </div>
            </section>
            <div className="flex justify-between items-center">
              <p>{date}</p>
              <a href={link}>Visit site</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Project
