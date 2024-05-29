import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../../images/carousel-1.png'; // Replace with your actual images
import carousel2 from '../../images/carousel-2.png'; // Replace with your actual images
import carousel3 from '../../images/carousel-3.png'; // Replace with your actual images
import './custom.css';


const slides = [
  {
    imgSrc: carousel1,
    "name": "James Ali Makroome",
    "title": "Investment Analyst",
    "testimonial": "The team at ABZ Network is exceptional. They always come prepared and thorough in the job they do. I would highly recommend their services for any future maintenance needs."
  },
  {
    imgSrc: carousel2,
    "name": "Leyla Hassan",
    "title": "Technical Lead",
    "testimonial": "I am incredibly impressed with the detail and professionalism of ABZ Network. They are reliable, thorough, and maintain high standards which ensures everything is top-notch!"
  },
  {
    imgSrc: carousel3,
    "name": "Sarah Ahmed",
    "title": "Project Supervisor",
    "testimonial": "ABZ Network has been a game-changer for us. Their dedication and commitment to quality work is evident in everything they do. We look forward to more projects with them."
  },
  {
    imgSrc: carousel3,
    "name": "Sarah Ahmed",
    "title": "Project Supervisor",
    "testimonial": "ABZ Network has been a game-changer for us. Their dedication and commitment to quality work is evident in everything they do. We look forward to more projects with them."
  }
]


function DarkVariantExample() {

  const chunkSize = window.innerWidth > 700 ? 3 : 1;
  const slideChunks = [];

  for (let i = 0; i < slides.length; i++) {
    const chunk = [];
    for (let j = 0; j < chunkSize; j++) {
      chunk.push(slides[(i + j) % slides.length]);
    }
    slideChunks.push(chunk);
    i += chunkSize - 1;
  }

  return (
    <div style={{position: "relative"}}>
    <img className="d-none d-sm-block" style={{position: "absolute", top: "-3.5rem", left: "3rem", zIndex: "10", height: "25rem"}} src={require('../../images/colons.png')} />
    <Carousel data-bs-theme="dark" data-bs-interval="false" className='poppin'>
      {slideChunks.map((chunk, index) => (
        <Carousel.Item key={index} interval={5000} pause="hover">
          <div className="row text-white">
             <div className='col-0 col-sm-3'>
             </div>
            {chunk.map((slide, idx) => (
              <div className="col-sm-3 col-12" key={idx}>
                <div className="card rounded bg-white border-0" >
                  <div className="card-body">
                    <div className='card-main'>
                      <img className="card-img-top" src={slide.imgSrc}
                        alt={index} />
                      <div>
                        <p style={{fontSize: 13}}>{slide.name}</p>
                        <small style={{fontSize: 10}}>{slide.title}</small>
                      </div>
                    </div>
                    <div className='card-content'>
                      <p style={{fontSize: 10}}>{slide.testimonial}</p>
                    </div>
                  </div>
                </div>


              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
}

export default DarkVariantExample;
