import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Model = ({ showModel, setShowModel }) => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {showModel && (
          <motion.div
            className="backdrop"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div className="model" variants={modalVariants}>
              <p>Want to make another Pizza?</p>
              <Link to="/">
                <button>Start Again</button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Model;
