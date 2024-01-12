import React, { useState, useEffect } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import axios from 'axios';

function Cards() {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = selectedPlace
          ? await axios.get(`http://localhost:3001/api/places/${selectedPlace}`)
          : await axios.get('http://localhost:3001/api/places/');
        console.log(response.data.data)
        setPlaces(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedPlace]);

  return (
    
    <div className='cards'>
    
      <h1>Görülmesi Gereken Yerler...</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {places.map((place) => (
             <CardItem
             key={place["Name"]}
             to={`${place["Name"]}`} // Link içindeki "to" prop'u
             label={place['Location']}
             src={place['pictureLink']}
             name={place['Name']}
           />
           
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
