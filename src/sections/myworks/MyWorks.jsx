import { useState } from "react";
import "./myWorks.css";

function MyWorks() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      title: "Mobile App UI/UX Design",
      discription:
        "If you want some cool mobile app UI/UX design, you came to the right place.",
      image: "./img/mobile-mockup.png",
    },
    {
      id: 2,
      title: "Responsive WebDesign",
      discription:
        "I am here to design your websites and webapps fully responsive.",
      image: "./img/mobile-desktop-mockup.png",
    },
    {
      id: 3,
      title: "Back-end Services",
      discription:
        "Back-ends are very important in terms of having a secure application. Make secure your websites by trusting on our work.",
      image: "./img/backend.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="myworks" id="myworks">
      <h2 className="title">My works</h2>

      <div
        className="slide"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((item) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <h2>{item.title}</h2>
                <p>{item.discription}</p>
              </div>
              <div className="right">
                <img src={item.image} alt={item.title} className="img" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="./img/arrow.png"
        alt="arrow"
        className="leftarrow"
        onClick={() => handleClick("left")}
      />
      <img
        src="./img/arrow.png"
        alt="arrow"
        className="rightarrow"
        onClick={() => handleClick("")}
      />
    </div>
  );
}

export default MyWorks;
