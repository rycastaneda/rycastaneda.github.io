import React, { useEffect, useState } from "react";

// Define types for the Project props
interface ProjectProps {
  title?: string;
  link?: string;
  date?: string;
  image_url?: string;
  background?: string;
  background_color?: string;
  description: string;
  panelClass?: string;
  stack?: string;
}

const Project: React.FC<ProjectProps> = ({
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
  const [toggle, setToggle] = useState<boolean>(false);
  const [backgroundImage, setBackgroundImage] = useState<string | undefined>(background);

  useEffect(() => {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth;
    setToggle(screenWidth < 900);

    const fetchRandomImage = async () => {
      let images: { src: { large: string } }[] = [];
      try {
        const response = await fetch(
          "https://api.pexels.com/v1/search?query=abstract&orientation=landscape&size=large&per_page=25",
          {
            headers: { 'Authorization': `0Yj9fnhb8D5ZsYMFnnOUwgw35xD4rviKaYpJJEwg6kkRzu0m60QViXAZ` }
          }
        );
        const json = await response.json();
        images = json['photos'];
        if (images.length > 0) {
          setBackgroundImage(images[Math.floor(Math.random() * images.length)]['src']['large']);
        }
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    if (!background) {
      fetchRandomImage();
    }
  }, [background]);

  const techs = stack?.split(",").map((tech, i) => (
    <p
      className="rounded-full py-1 px-3 text-white bg-gray-700 text-xs mr-2"
      key={i}
    >
      {tech}
    </p>
  ));

  const img = backgroundImage ? (
    <img
      src={backgroundImage}
      className="absolute z-0 max-w-none object-cover bg-gray-100 w-full h-full left-0 top-0 mb-0"
      alt=""
    />
  ) : (
    <div className="absolute z-0 max-w-none object-cover bg-gray-100 w-full h-full left-0 top-0 mb-0"></div>
  );

  return (
    <article
      className={`flex-grow lg:w-1/2 w-full flex flex-col justify-center align-middle min-h-screen ${panelClass || ''}`}
    >
      <div
        className="relative overflow-hidden flex-none h-100"
        role="button"
        tabIndex={0}
        onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}
      >
        {background_color ? null : img}
        <div
          className="relative flex flex-col lg:justify-center h-full items-center z-10"
          style={{ backgroundColor: background_color ? `#${background_color}` : undefined }}
        >
          <header className="flex justify-center h-28 mt-40 lg:mt-0">
            {image_url && (
              <img
                src={image_url}
                className="max-h-20 min-h-20 w-40"
                alt=""
              />
            )}
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
              />
              <div className="flex mt-2">
                <p className="rounded-full py-1 px-3 bg-gray-700 text-white mr-2 p-2 text-xs">
                  HTML+CSS
                </p>
                {techs}
              </div>
            </section>
            <div className="flex justify-between items-center">
              {date && <p>{date}</p>}
              {link && <a href={link}>Visit site</a>}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
