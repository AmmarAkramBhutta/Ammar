import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import AboutSection from "../components/about-section";
import FaqSection from "../components/faq-section";
import ReviewsSection from "../components/reviews-section";
import SkillsSection from "../components/skills-section";
import ScrollTop from "../components/ScrollTop";
import SayHi from "../components/say-hi";
import Footer from "../components/footer";

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
      <SayHi />
      <Footer />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
