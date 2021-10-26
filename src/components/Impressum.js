import React from "react";
import { Link } from "react-router-dom";

// Animation
import { motion } from "framer-motion";
import { toggleAnimation } from "../animations/animations";

const Impressum = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={toggleAnimation}>
      <h1>Impressum</h1>
      <Link to="/">
        <button className="btn-secondary">Home</button>
      </Link>
    </motion.div>
  );
};

export default Impressum;
