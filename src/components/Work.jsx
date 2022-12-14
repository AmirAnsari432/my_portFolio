import React from "react";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-bootstrap/Carousel";
import img from "../assets/1.jpg";
import img1 from "../assets/Img3.jpg";
import img2 from "../assets/Portfolio.jpg";

const Work = () => {
  return (
    <div className="d-flex justify-content-center align-item-center bg-dark p-3 wh-50 ">
      <div id="work">
        <div>
          <h2 className="text-light text-center p-3 ">WORK</h2>
        </div>
        <Carousel>
          <Carousel.Item>
            <img className="mw-300 mh-500 border border-success" src={img} alt="First Slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} alt="First Slide " />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={img1} alt="First Slide " />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Work;
