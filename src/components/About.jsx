import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import {calendar,university,place,study} from '../assets';
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, course,college ,year,location}) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        {/* <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        /> */}
        <div className='flex flex-col gap-2'>
         <p className='flex flex-row gap-2'> <img src={calendar} className='w-[15px] h-[15px] mt-1'/>{year} </p>
         <p className='flex flex-row gap-2'>
           <img src={study} className='w-[15px] h-[15px] mt-2'/>
            <h3 className='text-white flex flex-row text-[20px] font-bold text-center gap-2'>
          {title}|<h4>{course}</h4>
        </h3></p>
        
        
        <p className='flex flex-row gap-2'> <img src={university} className='w-[15px] h-[15px] mt-1'/><p className='flex flex-col font-light'>{college}</p>
        </p>

        <p className='flex flex-row gap-2'> <img src={place} className='w-[15px] h-[15px] mt-1'/><p className='flex flex-col font-light'>{location}</p>
        </p>
        </div>
        
        
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a passionate and motivated entry-level frontend developer with a strong foundation in JavaScript. Eager to apply my knowledge and skills in React to contribute to innovative and user-centric projects. As a dedicated learner, I am excited to collaborate with a team to create impactful and scalable solutions.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
