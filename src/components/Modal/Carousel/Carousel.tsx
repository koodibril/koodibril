import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css";

const Carousel: React.FC<{
  pictures: string[];
}> = (props) => {
  const { pictures } = props;
  const picRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [picture, setPicture] = useState(0);

  useEffect(() => {
    picRefs.current = picRefs.current.slice(0, pictures.length);
  }, [pictures]);

  useEffect(() => {
    picRefs.current[picture]?.scrollIntoView({ block: "center" });
  }, [picture]);

  const generatePictures = () => {
    if (!props.pictures || props.pictures.length === 0)
      return (
        <div className="carousel-item">
          <img className="carousel-picture" src={"/images/damn.png"} />
        </div>
      );
    return props.pictures.map((pic, id) => {
      return (
        <div
          className="carousel-item"
          key={id}
          ref={(el) => (picRefs.current[id] = el)}
        >
          <img className="carousel-picture" src={pic} />
        </div>
      );
    });
  };

  return (
    <>
      <div className="carousel-wraper">
        <div className="carousel">{generatePictures()}</div>
      </div>
      <div className="control">
        {pictures.map((pic, id) => {
          return (
            <div
              className={"controller" + (picture === id ? " selected" : "")}
              key={id}
              onClick={() => setPicture(id)}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default Carousel;
