import React, { useState, useEffect } from 'react';
import CrickCard from './CrickCard';

function FilterMatches({ status }) {
  const [apiData, setApiData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Assuming fetchData is an asynchronous function to fetch data
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8080/match/live");
        const data = await res.json();
        setApiData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (status === 'COMPLETED' || status === 'LIVE') {
      const filteredMatches = apiData.filter(match => match.status === status);
      setFilteredData(filteredMatches);
    } else {
      setFilteredData([]);
    }
  }, [status, apiData]);

  return (
    <>
      {filteredData && <CrickCard apiData={filteredData} />}
    </>
  );
}

export default FilterMatches;
