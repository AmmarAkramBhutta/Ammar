import { motion } from "framer-motion";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ReviewsSection = () => {
  const [element, controls] = useScroll();

  return (
    <ReviewStyle
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        <span className="purpled">Reviews</span>.
      </h2>
      <span className="highlite">What people say about Ammar</span>
      <div className="wrapper">
        <div className="review">
          <p className="reviewtext">
            “ A few words spring to mind when I think of Ammar - cleverly
            creative, persuasive, extremely detailed, exceptional comms, I could
            carry on... and all this means he is one brilliant designer who we
            love to work with. ”
          </p>
          <p className="review-author"></p>
        </div>
        <p className="author"> - upwork client</p>
      </div>
    </ReviewStyle>
  );
};

const ReviewStyle = styled(motion.div)`
  .review {
    margin: 50px 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .reviewtext {
    font-size: 24px;
    max-width: 600px;
    font-style: italic;
    text-align: center;
  }

  .author {
    text-align: right;
    max-width: 800px;
  }
`;

export default ReviewsSection;
