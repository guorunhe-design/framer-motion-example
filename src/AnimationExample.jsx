import React from 'react';
import { motion } from 'framer-motion';

const AnimationExample = () => {
  return (
    <div>
      {/* Basic animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Fade In
      </motion.div>

      {/* Animate position */}
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        Slide In
      </motion.div>

      {/* Animate size */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        Scale Up
      </motion.div>

      {/* Animate color */}
      <motion.div
        initial={{ backgroundColor: 'red' }}
        animate={{ backgroundColor: 'blue' }}
        transition={{ duration: 1 }}
      >
        Color Change
      </motion.div>

      {/* Animate multiple properties */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Fade In and Slide In
      </motion.div>

      {/* Animate on hover */}
      <motion.div
        whileHover={{ scale: 1.2 }}
      >
        Scale on Hover
      </motion.div>
    </div>
  );
};

export default AnimationExample;
