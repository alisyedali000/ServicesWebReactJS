import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../../images/carousel-1.png'; // Replace with your actual images
import carousel2 from '../../images/carousel-2.png'; // Replace with your actual images
import carousel3 from '../../images/carousel-3.png'; // Replace with your actual images
import './custom.css';

const slides = [
  {
    imgSrc: carousel1,
    name: "James Ali Makroome",
    title: "Investment Analyst",
    testimonial: "The team at ABZ Network is exceptional. They always come prepared and thorough in the job they do. I would highly recommend their services for any future maintenance needs."
  },
  {
    imgSrc: carousel2,
    name: "Leyla Hassan",
    title: "Technical Lead",
    testimonial: "I am incredibly impressed with the detail and professionalism of ABZ Network. They are reliable, thorough, and maintain high standards which ensures everything is top-notch!"
  },
  {
    imgSrc: carousel3,
    name: "Sarah Ahmed",
    title: "Project Supervisor",
    testimonial: "ABZ Network has been a game-changer for us. Their dedication and commitment to quality work is evident in everything they do. We look forward to more projects with them."
  },
  // {
  //   imgSrc: carousel3,
  //   name: "Sarah Ahmed",
  //   title: "Project Supervisor",
  //   testimonial: "ABZ Network has been a game-changer for us. Their dedication and commitment to quality work is evident in everything they do. We look forward to more projects with them."
  // }
];

function DarkVariantExample() {
  const chunkSize = 3;

  const slideChunks = [];
  for (let i = 0; i < slides.length; i += chunkSize) {
    const chunk = slides.slice(i, i + chunkSize);
    slideChunks.push(chunk);
  }

  return (
    <div style={{ position: "relative" }}>
      <img
        className="d-none d-sm-block"
        style={{ position: "absolute", top: "-3.5rem", left: "3rem", zIndex: "10", height: "9rem" }}
        src={window.location.origin + `/images/Carousel/“.png`}
        alt="Decoration"
      />
      {window.innerWidth > 700 ?<Carousel
        data-bs-theme="dark"
        data-bs-interval={false}
        className="poppin"
        controls={false}
        indicators={false}
        interval={5000} // Set interval to 5000ms (5 seconds)
        pause="hover"
      >
        {slideChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="row text-white py-3">
              <div className="col-0 col-sm-3"></div>
              {chunk.map((slide, idx) => (
                <div className="col-sm-4 col-12 " style={{padding: "0 2rem"}} key={idx}>
                  <div className="card  bg-white border-0 box-shadow px-3">
                    <div className="card-body" style={{ height: "398px", paddingTop: "60px" }}>
                      <div className="card-main">
                        <img className="card-img-top" src={slide.imgSrc} alt={slide.name} />
                        <div>
                          <p style={{fontSize:"20px",marginBottom: "8px", fontWeight: "normal"}}>{slide.name}</p>
                          <small style={{fontSize:"15px"}}>{slide.title}</small>
                        </div>
                      </div>
                      <div className="card-content h-100" style={{ marginTop: "8%" }}>
                        <p>{slide.testimonial}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      :<Carousel
        data-bs-theme="dark"
        data-bs-interval={false}
        className="poppin"
        controls={false}
        indicators={false}
        interval={3000} // Set interval to 5000ms (5 seconds)
        pause="hover"
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className='container-fluid '>
            <div className="row text-white">
              <div className="col-12 ">
                  <div className="card rounded bg-white border-0 shadow">
                    <div className="card-body " style={{ height: "398px", paddingTop: "60px" }}>
                      <div className="card-main">
                        <img className="card-img-top" src={slide.imgSrc} alt={slide.name} />
                        <div>
                          <p>{slide.name}</p>
                          <small>{slide.title}</small>
                        </div>
                      </div>
                      <div className="card-content h-100" style={{ marginTop: "10%" }}>
                        <p>{slide.testimonial}</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>}
    </div>
  );
}

export default DarkVariantExample;
