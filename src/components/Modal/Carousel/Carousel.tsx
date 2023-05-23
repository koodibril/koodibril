import React, { useEffect, useMemo, useRef, useState } from "react";
import { ReactComponent as Pdf } from "src/icons/pdf.svg";
import "./Carousel.css";

const Carousel: React.FC<{
  pictures: string[];
  pdf: string;
}> = (props) => {
  const { pictures, pdf } = props;
  const picRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [picture, setPicture] = useState(
    pictures.length === 0 && pdf !== "" ? 1 : 0
  );
  const carouselLength = useMemo(() => {
    if (pictures.length > 0 && pdf !== "") return pictures.length + 1;
    if (pdf !== "" && pictures.length === 0) return 1;
    return 0;
  }, [pictures, pdf]);

  useEffect(() => {
    picRefs.current = picRefs.current.slice(0, carouselLength);
  }, [carouselLength]);

  useEffect(() => {
    picRefs.current[picture]?.scrollIntoView({ block: "center" });
  }, [picture]);

  const generatePictures = () => {
    return props.pictures.map((pic, id) => {
      return (
        <div
          className="carousel-item"
          key={id}
          ref={(el) => (picRefs.current[id] = el)}
        >
          <img className="picture" src={pic} />
        </div>
      );
    });
  };

  return (
    <>
      <div className="carousel-wraper">
        <div className="carousel">
          {generatePictures()}
          {pdf !== "" ? (
            <div
              className="carousel-item"
              ref={(el) => (picRefs.current[carouselLength] = el)}
            >
              <Pdf style={{ maxWidth: "3em" }} />
            </div>
          ) : null}
        </div>
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
        {pdf !== "" ? (
          <div
            className={
              "controller" + (picture === carouselLength ? " selected" : "")
            }
            onClick={() => setPicture(carouselLength)}
          ></div>
        ) : null}
      </div>
    </>
  );
};

export default Carousel;
