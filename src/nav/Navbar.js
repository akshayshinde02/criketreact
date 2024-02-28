
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'; 
import FilterMatches from '../home/FilterMatches';
import CrickCard from '../home/CrickCard';

function NavbarCrick() {
  const [apiData, setApiData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filterStatus, setFilterStatus] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch("http://localhost:8080/match/live");
          const data = await res.json();
          setApiData(data);
          // console.log(data)
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
  
    const filterMatches = (status) => {
      setFilterStatus(status);
      //console.log(apiData)
      if (status === 'COMPLETED' || status === 'LIVE') {
        const filteredMatches = apiData.filter(match => match.status === status);
        // console.log(filteredMatches)
        setFilteredData(filteredMatches);
      } else {
        setFilteredData([]);
      }
    };
  return (
    <>
    <Navbar expand="lg" className="navbar" >
    <Container>
      <Navbar.Brand href="#home">Live Criket App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href='/live'>Live Matches</Nav.Link>
          <Nav.Link href="/complete">Completed Matches</Nav.Link>
          <Nav.Link href="/">All Matches</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
 {filteredData && <CrickCard  apiData={filteredData}/>}
 </>
  )
}

export default NavbarCrick