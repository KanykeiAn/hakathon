import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomePage = () => {
    return (
        <>
        <img src="https://images.squarespace-cdn.com/content/v1/568aa781a976af7af9b0e2d3/1454016529370-OIFWN31B4HG3F9IUKDE2/stock-photo-82995507-french-macaroons-with-coffee-beans.jpg?format=1000w" className='back' alt="" />
        <Carousel variant="dark">
  <Carousel.Item>
  <video src="https://www.instagram.com/p/CSHW8fRIxRq/"
        alt="First slide"
        className="d-block w-100">
  </video>
    
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <video src=""
        alt="Second slide"
        className="d-block w-100">
  </video>
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <video src=""
        alt="Third slide"
        className="d-block w-100">
  </video>
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</>
    );
};

export default HomePage;