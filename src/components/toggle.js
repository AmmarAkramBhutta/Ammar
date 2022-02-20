import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { About } from "./about-section";

const Toggle = ({ title, children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
