import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import AboutSection from "../components/about-section";
import FaqSection from "../components/faq-section";
import ReviewsSection from "../components/reviews-section";
import SkillsSection from "../components/skills-section";
import ScrollTop from "../components/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <SkillsSection />
      <ReviewsSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
