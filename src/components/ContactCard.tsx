import React from "react";
import "../styles/home.css";

// Define the types for the props
interface ContactCardProps {
  picture: string;
  name: string;
  email: string;
  label: string;
  region: string;
  phone: string;
  headline: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  picture,
  name,
  email,
  label,
  region,
  phone,
  headline,
}) => {
  return (
    <div className="bg-white rounded-r-xl sm:rounded-xl overflow-hidden flex flex-col lg:flex-row p-8">
      <div className="z-10 overflow-hidden flex-none lg:-m-8 lg:mr-8 lg:w-56 w-auto h-auto">
        <img
          src={picture}
          className="object-cover bg-gray-100 w-full h-full"
          alt={`${name}'s picture`}
        />
      </div>
      <div className="description max-w-xs flex flex-col justify-between">
        <section>
          <h2 className="pb-1 pt-2">{name}</h2>
          <p>{label}</p>
          <p>
            <i className="bi bi-envelope pr-1"></i>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>
            <i className="bi bi-phone pr-1"></i>
            {phone}
          </p>
          <p>
            <i className="bi bi-geo-alt pr-1"></i>
            {region}
          </p>
          <p
            className="font-mono text-sm my-3"
            dangerouslySetInnerHTML={{ __html: headline }}
          />
        </section>
        <section>
          <a href="/cv">Click here for my full CV.</a>
        </section>
      </div>
    </div>
  );
};

export default ContactCard;
