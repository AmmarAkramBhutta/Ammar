import { motion } from "framer-motion";
import styled from "styled-components";
import { waveAnimation } from "../animation";

const Wave = () => {
  return (
    <WaveSvg
      viewBox="0 0 1440 363"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={waveAnimation}
        d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
        stroke="#9B51E0"
        strokeOpacity="1"
        strokeWidth="7"
      />
    </WaveSvg>
  );
};

const WaveSvg = styled.svg`
  position: absolute;
  top: 20vh;
  left: 0;
  z-index: -7;

  path {
    @media (max-width: 768px) {
      stroke-width: 12;
    }
  }
`;

export default Wave;
