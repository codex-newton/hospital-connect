import React, { useState } from 'react';
import axios from 'axios';

const HospitalSearch = () => {
  const [hospitalName, setHospitalName] = useState('');
  const [province, setProvince] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://hospital-indonesia.p.rapidapi.com/hospitalprov/', {
        params: {
          val: 'jakarta',
          name: hospitalName,
          province: province,
        },
        headers: {
          'x-rapidapi-key': '09ef6a1363msh5729b2d57369354p197a37jsna076e6537603',
          'x-rapidapi-host': 'hospital-indonesia.p.rapidapi.com'
        },
      });
      const hospitals = response.data; // Assuming the API returns an array of hospitals
      setSearchResults(hospitals);
    } catch (error) {
      console.error('Error fetching hospital data:', error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div>
      <h2>Hospital Search</h2>
      <form onSubmit={handleSearch}>
        <div>
          <label>Hospital Name:</label>
          <input type="text" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} />
        </div>
        <div>
          <label>Province:</label>
          <input type="text" value={province} onChange={(e) => setProvince(e.target.value)} />
        </div>
        <button type="submit">Search</button>
      </form>

      {searchResults.length > 0 && (
        <div>
          <h3>Search Results:</h3>
          <ul>
            {searchResults.map((hospital) => (
              <li key={hospital.id}>
                {hospital.name} - {hospital.province}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HospitalSearch;
