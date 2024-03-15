import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { skills } from "../data";

export const Intro = () => {
  const src = "https://www.youtube.com/watch?v=13OsRrnG0NY";
  return (
    <section className="skill" id={"skills"}>
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx">
                <iframe
                  width="700"
                  height="400"
                  src="https://www.youtube.com/embed/G1vgLP7RCKQ?si=meHhP2jzgUrMypmJ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
      </div>
    </section>
  );
};
