import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PlaceTable.css'; 

const PlaceTable = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/places/');
        setPlaces(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Places</h1>
      <table className="place-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Location</th>
            <th>Wikipedia Link</th>
            <th>Picture Link</th>
            <th>Build In Year</th>
          </tr>
        </thead>
        <tbody>
          {places.map((place, index) => (
            <tr key={index}>
              <td className="index-column">{index + 1}</td>
              <td>{place.Name}</td>
              <td>{place.Type}</td>
              <td>{place.Latitude}</td>
              <td>{place.Longitude}</td>
              <td>{place.Location}</td>
              <td>
                <a href={place.wikipediaLink} target="_blank" rel="noopener noreferrer">
                  Wikipedia Link
                </a>
              </td>
              <td>
                <a href={place.pictureLink} target="_blank" rel="noopener noreferrer">
                  Picture Link
                </a>
              </td>
              <td>{place.buildInYear}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlaceTable;
