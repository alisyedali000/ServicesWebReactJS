import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Crousel = () => {
    return (
        <div className='crousel-background'>
            <div className="container crousel-container">
                <div className="row">
                    <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000}>
                        <div>
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/800x4" alt="Slide 2" />
                            <p className="legend">Slide 2</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/800x4" alt="Slide 3" />
                            <p className="legend">Slide 3</p>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Crousel;
