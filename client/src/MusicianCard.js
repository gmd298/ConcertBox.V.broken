import React from "react";

function MusicianCard() {

  // const [favorite, setFavorite] = useState(false)

  // const handleClick = () => {
  //   setFavorite(!favorite)
  // }

  // const handleDelete = () => {
  //   fetch(`http://localhost:3000/musicians/${musician.id}`, {
  //     method: 'DELETE',
  //   })
  // }

  const onClick = (e) => {
    e.preventDefault();
    
    // if (addPart) {
    //   addPart(part);
    // } else if (removePart) {
    //   removePart(part);
    // }
  }

  return (
      <div className="musician-card" onClick={onClick}>
        <p><strong>Name: </strong></p>
        <p>{/* image */}</p>
        <p><strong>{/* Like Button */}</strong></p>
      </div>
  );
}

export default MusicianCard;