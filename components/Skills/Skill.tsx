"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import icon from "@/type/icon";
import "@/styles/Skill.css";

const Skill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { frontendSkills, backendSkills } = icon();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const renderMobileSkillCard = (
    skill: any,
    index: number,
    delay: number = 0
  ) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, delay: index * 0.1 + delay }}
      key={index}
      className="flex items-center justify-between p-4 bg-white/90 rounded-lg shadow-sm mb-3 cursor-none"
    >
      <div className="flex items-center gap-3">
        <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
        <h4 className="text-sm font-medium text-gray-700">{skill.name}</h4>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={
              isInView ? { width: `${skill.proficiency}%` } : { width: 0 }
            }
            transition={{ duration: 1, delay: index * 0.1 + delay }}
            className="h-full bg-[#8B6B4E] rounded-full"
          />
        </div>
        <span className="text-xs text-gray-600">{skill.proficiency}%</span>
      </div>
    </motion.div>
  );

  const renderDesktopSkillCard = (
    skill: any,
    index: number,
    delay: number = 0
  ) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      transition={{ duration: 0.3, delay: index * 0.1 + delay }}
      key={index}
      className="skill-card cursor-none"
    >
      <div className="flex flex-col items-center gap-2">
        <img src={skill.icon} alt={skill.name} className="skill-icon" />
        <h4 className="skill-name">{skill.name}</h4>
        <div className="skill-progress-container">
          <motion.div
            initial={{ width: 0 }}
            animate={
              isInView ? { width: `${skill.proficiency}%` } : { width: 0 }
            }
            transition={{ duration: 1, delay: index * 0.1 + delay }}
            className="skill-progress-bar"
          />
        </div>
        <span className="skill-proficiency">{skill.proficiency}%</span>
      </div>
    </motion.div>
  );

  const renderSkillSection = (
    title: string,
    skills: any[],
    delay: number = 0
  ) => (
    <div>
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        whileHover={{ scale: 1.05, color: "#6B4E33" }}
        transition={{ duration: 0.5, delay: delay }}
        className="skill-subtitle cursor-none"
      >
        {title}
      </motion.h3>
      <div className={isMobile ? "space-y-2" : "skill-grid"}>
        {skills.map((skill, index) =>
          isMobile
            ? renderMobileSkillCard(skill, index, delay)
            : renderDesktopSkillCard(skill, index, delay)
        )}
      </div>
    </div>
  );

  return (
    <div ref={ref} className="skill-section cursor-none" id="skill">
      <div className="skill-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          whileHover={{ scale: 1.05, color: "#6B4E33" }}
          transition={{ duration: 0.5 }}
          className="skill-title"
        >
          Skills
        </motion.h2>

        <div className="space-y-8">
          {renderSkillSection("Frontend", frontendSkills, 0.2)}
          {renderSkillSection("Backend", backendSkills, 0.4)}
        </div>
      </div>
    </div>
  );
};

export default Skill;
