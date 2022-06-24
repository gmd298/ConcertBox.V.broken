import React from "react";

function EventCard({values}) {

  return (
    <li className="card-item">
      <div className="card">
        <div className="card-content">
          <div className="card-title">{values.musicianName}</div>
          <p className="card-text">{values.venueName}</p>
          <p className="card-details">{values.location}</p>
          <p className="card-details">{values.date}</p>
        </div>
      </div>
    </li>
  );
}

export default EventCard;