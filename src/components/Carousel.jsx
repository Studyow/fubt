import Carousel from 'react-bootstrap/Carousel';


function Carousel01() {
  return (
    <>
  <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media.istockphoto.com/id/1220103996/photo/generic-red-sports-car-moving-at-high-speed-on-racetrack.webp?b=1&s=170667a&w=0&k=20&c=TFNfIMFOsNFFE8qwL8sTJ1eU6xMxWQPAF6usyVjBN3M="
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media.istockphoto.com/id/1277770032/photo/generic-red-sports-car-parked-in-empty-garage.webp?b=1&s=170667a&w=0&k=20&c=A4GQV2sxCtE5G2LVIkoHKcYB1rQdmFxzjQUSaVf18f0="
        alt="Second slide"
      />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media.istockphoto.com/id/1221987246/photo/red-sports-car-in-open-door-garage-on-bright-day.webp?b=1&s=170667a&w=0&k=20&c=uKyJhCo4SIoEo4QZsJ565r858QK1zUxXY-nNEb2vYUQ="
        alt="Third slide"
      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </>
   
  );
}

export default Carousel01;