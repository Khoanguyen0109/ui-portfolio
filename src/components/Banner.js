import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["UI/UX Designer", "Product Designer"];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  {/* <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Thu Hien`}{" "}
                    <div
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "UI/UX Designer" , "Product Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </div>
                  </h1> */}
                  <h1
                    style={{
                      fontSize: "50px",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    I'm{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      Sr product designer
                    </span>{" "}
                    crafting digital experiences that are{" "}
                    <span
                      style={{
                        fontWeight: "600",
                        fontStyle: "italic",
                        color: "#FFCBAA",
                      }}
                    >
                      intuitive
                    </span>{" "}
                    and{" "}
                    <span
                      style={{
                        fontWeight: "600",
                        fontStyle: "italic",
                        color: "#FF8C62",
                      }}
                    >
                      data-informed
                    </span>
                    .
                  </h1>
                  {/* <p>
                    I am a UX/UI designer with 3 years experience with product
                    in house, I have always aspired to create products that
                    serve millions of users around the world, and also bring
                    profits to businesses.
                  </p>
                  <br />
                  <p>
                    I hope to find an environment where I can not only
                    contribute my abilities but also learn and gain experience,
                    and especially contribute my personal opinions to the
                    success of the product.
                  </p> */}
                  {/* <button onClick={() => console.log('connect')}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button> */}
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
