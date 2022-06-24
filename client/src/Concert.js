import React, {useEffect, useState} from 'react';
import EventCard from './EventCard';

function Concert(){
  const [values, setValues] = useState({
    musicianName: "",
    venueName: "",
    location: "",
    date: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleMusicianNameChange = (e) => {
    setValues({...values, musicianName: e.target.value})
  }
  const handleVenueNameChange = (e) => {
    setValues({...values, venueName: e.target.value})
  }
  const handleLocationChange = (e) => {
    setValues({...values, location: e.target.value})
  }
  const handleDateChange = (e) => {
    setValues({...values, date: e.target.value})
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.musicianName && values.venueName && values.date) {
      setValid(true);
    }
    setSubmitted(true);
  }

  useEffect(() => {

  }, []);

  // const fetchEvents = () => fetch("/")

  return (
    <>
      <div className="form-container">
        <form className="event-form" onSubmit={handleSubmit}>
          {submitted && valid ? <div className="success-message">Niiiice!</div> : null }
            <input 
              onChange={handleMusicianNameChange}
              value={values.musicianName}
              className="form-field"
              placeholder="Musician Name"
              name="musicianName" />
            {submitted && !values.musicianName ? <span>Please enter name</span> : null}
            <input 
              onChange={handleVenueNameChange}
              value={values.venueName}
              className="form-field"
              placeholder="Venue Name"
              name="venueName" />
            {submitted && !values.venueName ? <span>Please enter name</span> : null}
            <input 
              onChange={handleLocationChange}
              value={values.location}
              className="form-field"
              placeholder="Location"
              name="location" />
            {submitted && !values.location ? <span>Please enter city</span> : null}
            <input 
              onChange={handleDateChange}
              value={values.date}
              className="form-field"
              placeholder="Date"
              name="date" />
            {submitted && !values.date ? <span>Please enter name</span> : null}
          <button
            className='form-field'
            type='submit'>Submit</button>
        </form>
      </div>
      <div className="event-cards-container">
        <ul className="event-cards-list">
          <EventCard values={values} />
        </ul>
      </div>
    </>
    );
}
export default Concert;