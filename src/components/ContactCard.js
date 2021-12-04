import React from 'react';
import '../styles/home.css'
const ContactCard = ({ picture, name, email, label}) => {
  return (
    <div className="card">
      <div class="avatar">
        <img src={picture} alt=""></img>
      </div>
      <div class="description">
        <h2 >
          {name}
        </h2>
        <p>
          {label}
        </p>
        <p>
          {email}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;