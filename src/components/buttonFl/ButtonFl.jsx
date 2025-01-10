import React from 'react';
import "./buttonFl.scss";
import cross from "../../Assets/cross.png";
import { motion } from "framer-motion";
import wp from "../../Assets/wp.png";
import ig from "../../Assets/ig.png";
import { useState } from 'react';

const variantButton = {
  initial: { opacity: 0, scale: 0},
  animate: { opacity:1, scale: 1, transition: { duration: 1 } },

}

const wpButton = {
  initial: { x: "-10px", y: "-20px", opacity: 0, pointerEvents: "none" },
  animate: {
    x: "50px", y: "-30px", opacity: 1, pointerEvents: "auto",
    transition: {
      type: "spring", stiffness: 19, damping: 3
    }
  }
}

const igButton = {
  initial: {  x: "-10px", y: "-20px", opacity: 0, pointerEvents: "none" },
  animate: {
    x: "-15px", y: "-90px", opacity: 1, pointerEvents: "auto",
    transition: {
      type: "spring", stiffness: 19, damping: 3
    }
  }
}


const ButtonFl = () => {

  const [useClick, setUseClick] = useState(false);

  return (
    <>
      <motion.div
        className='crossContainer'
        initial="initial"
        animate="animate"
        variants={variantButton}
        onClick={() => setUseClick(!useClick)}
      >
        <img className='imgCross' src={cross} alt="" />
        <div className='btn-socialMedia'>
          <a href="https://wa.me/+573187474537" target="_blank" tooltip="WhatsApp" rel="noopener noreferrer" className='a-socialMedia'>
            <motion.img src={wp} className='wp' alt=""
              initial="initial"
              animate={useClick ? "animate" : "initial"}

              variants={wpButton}
            />
          </a>
          <a href="https://www.instagram.com/lui.soto.17/?hl=es" tooltip="Instagram" rel="noopener noreferrer" target='_blank' className='a-socialMedia'>
            <motion.img src={ig} className='ig' alt=""
              initial="initial"
              animate={useClick ? "animate" : "initial"}
              variants={igButton}
            />
          </a>

        </div>
      </motion.div>

    </>
  );
};

export default ButtonFl;