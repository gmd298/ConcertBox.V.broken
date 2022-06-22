import React, {useState} from "react";

function MusicianCard({musician}) {

  const [favorite, setFavorite] = useState(false)

  const handleClick = () => {
    setFavorite(!favorite)
  }

  const handleDelete = () => {
    fetch(`http://localhost:3000/musicians/${musician.id}`, {
      method: 'DELETE',
    })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={musician.image} alt={musician.name} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{musician.name}</strong>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default MusicianCard;