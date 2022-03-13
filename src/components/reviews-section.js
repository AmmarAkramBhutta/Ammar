import { motion } from "framer-motion";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
import star from "../img/star.png";

const ReviewsSection = () => {
  const [element, controls] = useScroll();

  return (
    <ReviewStyle
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <div className="section">
        <h2>
          <span className="purpled">Reviews</span>.
        </h2>
        <div className="highlite">What people say about Ammar</div>
        <div className="wrapper">
          <div className="review reviewtext">
            <p>
              “Ammar was very helpful and patience in understanding the work
              that needed to be done on my website. <br />I will recommend him
              for any website related work needed.”
            </p>
          </div>
        </div>
        <div className="author_block">
          <p className="author">Upwork Client</p>
          <img src={star} alt="star" className="fivestar" />
        </div>
      </div>
    </ReviewStyle>
  );
};

const ReviewStyle = styled.div`
  .author_block {
    display: flex;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
  }
  .fivestar {
    max-width: 120px;
  }
  .section {
    margin-top: 50px;
    margin-bottom: 130px;
  }
  .fivestar {
    margin-bottom: 3px;
    margin-left: 15px;
  }
  .review {
    max-width: 500px;
    margin: 50px auto 10px;
    display: flex;
    justify-content: center;
  }

  .reviewtext {
    font-style: italic;
    text-align: center;
  }

  .author {
    text-align: center;
    font-weight: bold;
  }
`;

export default ReviewsSection;
