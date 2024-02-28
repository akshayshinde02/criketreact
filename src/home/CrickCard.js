import React from 'react'
import './style.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function CrickCard({apiData}) {
 // console.log(apiData);
  return (
<>
<Row xs={1} md={2} lg={4} className="">
      {Array.isArray(apiData) && 
      apiData.map((item) => (
        <Col key={item.id} xs={12} md={6} lg={4} className="mb-2 mt-4">
          <Card className="h-100 border-dark-subtle shadow card-container1 mleftright">
            <Card.Body className="d-flex flex-column">
              <Card.Title className='bold mx-0' >{item.teamHeading}</Card.Title>
              <p >{item &&item.matchNumberVenue}</p>
              <hr/>
              <div className='flex'>
              <Card.Text>{ item.battingTeam }</Card.Text>
              <div className='space'>
                <Card.Text>{ item.battingTeamScore }</Card.Text>
              </div>
              </div>

              <div className='flex'>
                <Card.Text>{ item.bowlTeam }</Card.Text>
              <div className='space'>
              <Card.Text>{ item.bowlTeamScore }</Card.Text>
              </div>
             </div>
             <Card.Text className='red'>{item.liveText}</Card.Text>
              <Card.Text>Status: {item.status}</Card.Text>
              </Card.Body>
          </Card>
          
        </Col>
      ))}
    </Row>

</>



  );
}

export default CrickCard