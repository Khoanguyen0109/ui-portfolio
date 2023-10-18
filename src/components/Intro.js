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
                <h2>My Introduction</h2>

                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/UWh42wPan6I?si=tQFIXBB5sj92qEWy"
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
