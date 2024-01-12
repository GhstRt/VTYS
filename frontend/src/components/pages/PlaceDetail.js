import { useParams } from 'react-router-dom';
import React, {useState} from 'react';
import axios from 'axios';

function PlaceDetail() {
  const { id } = useParams();
  const [one, setOne] = useState(null);
  console.log(id);
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/places/${id}`)
      setOne(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData()
  if (!one) {
    return <div>Loading...</div>; // Veri yüklenene kadar bekle
  }
  console.log(one)
  return (
    <div>
      <h1>Places</h1>
      <table className="place-table">
        <thead>
          <tr>
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
            
              <td>{one.Name}</td>
              <td>{one.Type}</td>
              <td>{one.Latitude}</td>
              <td>{one.Longitude}</td>
              <td>{one.Location}</td>
              <td>
                <a href={one['Wikipedia link']} target="_blank" rel="noopener noreferrer">
                  Wikipedia Link
                </a>
              </td>
              <td>
                <a href={one['Picture link']} target="_blank" rel="noopener noreferrer">
                  Picture Link
                </a>
              </td>
              <td>{one['Build in year']}</td>
        </tbody>
      </table>
    </div>
  )
}

export default PlaceDetail
