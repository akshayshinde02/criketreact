import React, { useState } from 'react'
import {useEffect} from 'react';
import CrickCard from './CrickCard';

function Home() {

  const[apiData,setApiData] = useState(null);

    let Api = "http://localhost:8080/match/live";

    const getApiData = async (url) =>{
        try {
          
            const res = await fetch(url);
            const data = await res.json();
          // console.log(data);
          setApiData(data);
        } catch (error) {
          console.error(error);
        }
       
      };
      useEffect(()=>{
       getApiData(Api);
       
      },[]);

  return (
    <>
   
   {apiData && <CrickCard  apiData={apiData}/>}
    </>
  )
}

export default Home




