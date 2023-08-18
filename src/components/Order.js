import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Order = ({ pizza, setShowModel }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModel(true);
    }, 4000);
  }, [setShowModel]);

  const orderVariants = {
    hidden: {
      x: "100vw",
    },

    visible: {
      x: 0,
      transition: { type: "spring", delay: 0.5 },
    },

    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="container order"
      variants={orderVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>

      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </motion.div>
  );
};

export default Order;
