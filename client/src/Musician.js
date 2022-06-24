import React, { useState, useEffect } from 'react';
import MusicianCard from './MusicianCard';

function Musician(){
  const [musicians, setMusicians] = useState([])

  useEffect(() => {
    fetchMusicians();
  }, []);

  const fetchMusicians = () => fetch('http://localhost:3000/musicians')
    .then((response) => response.json())
    .then((data) => {
      setMusicians(data);
    })

  return (
    <>
      <div>
        <div>
          Musician Page
        </div>{musicians.map(musicians => <MusicianCard 
        musicians={musicians}
        />)}
      </div>
    </>
    );
}
export default Musician;