import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
export default function Room({ room }) {
  const { name, slug, images, price,id2 } = room;

 console.log(room)
  return (
    <article className="room">
      <div className="img-container">
        {/* <img src={images[0] || defaultImg} alt="single room" /> */}
        <img src="https://pix10.agoda.net/hotelImages/487/487386/487386_13090617190014898442.jpg?s=1024x768" alt="single room" />
        
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${id2}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};