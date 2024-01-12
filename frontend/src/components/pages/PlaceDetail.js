import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PlaceDetail.css'; // CSS dosyanızı import edin

function PlaceDetail() {
  const { id } = useParams();
  const [one, setOne] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/places/${id}`);
        setOne(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!one) {
    return <div>Loading...</div>; // Veri yüklenene kadar bekleyin
  }

  return (
    <div className="place-detail-container">
      <div className="place-detail-content">
        <h1>{one.Name}</h1>
        <table className="place-detail-table">
          <tbody>
            <tr>
              <td><strong>Type:</strong></td>
              <td>{one.Type}</td>
            </tr>
            <tr>
              <td><strong>Latitude:</strong></td>
              <td>{one.Latitude}</td>
            </tr>
            <tr>
              <td><strong>Longitude:</strong></td>
              <td>{one.Longitude}</td>
            </tr>
            <tr>
              <td><strong>Location:</strong></td>
              <td>{one.Location}</td>
            </tr>
            <tr>
              <td><strong>Wikipedia Link:</strong></td>
              <td>
                <a href={one['Wikipedia link']} target="_blank" rel="noopener noreferrer">
                  Wikipedia Link
                </a>
              </td>
            </tr>
            <tr>
              <td><strong>Adress Link</strong></td>
              <td>
                <a href={one['Maps']} target="_blank" rel="noopener noreferrer">
                  Adress Lİnk
                </a>
              </td>
            </tr>
            <tr>
              <td><strong>Build In Year:</strong></td>
              <td>{one['Build in year']}</td>
            </tr>
            
            
          </tbody>
        </table>
      </div>
      <div className="place-detail-image">
        <img src={one['Picture link']} alt={one.Name} />
      </div>
    </div>
  );
}

export default PlaceDetail;
