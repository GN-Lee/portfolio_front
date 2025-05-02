"use client";
import React, { useEffect, useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { VisitorList } from "@/type/visitorList";
import { getVisitor } from "@/utils/api";
import "@/styles/Project.css";

const ProjectCard = memo(
  ({ project, index }: { project: VisitorList; index: number }) => (
    <motion.div
      key={project.id}
      className="project-card max-w-sm md:max-w-md lg:max-w-lg"
      id="project"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 40px -10px rgba(166, 129, 100, 0.15)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="aspect-video relative overflow-hidden rounded-lg mb-3 sm:mb-4">
        <motion.img
          src={project.projectInfo.image}
          alt={project.projectInfo.title}
          className="project-image w-full h-full object-cover absolute top-0 left-0"
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.08,
            filter: "brightness(1.1)",
          }}
        />
      </div>

      <motion.h3
        className="project-name text-xl md:text-2xl font-bold mb-2"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {project.projectInfo.title}
      </motion.h3>

      <motion.p
        className="project-description text-base md:text-lg font-semibold mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {project.comment}
      </motion.p>

      <motion.div
        className="project-skills flex flex-wrap gap-2 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {project.projectInfo.skills.map((skill, skillIndex) => (
          <motion.span
            key={skillIndex}
            className="project-skill text-xs md:text-sm px-3 py-1"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>

      <div className="project-buttons">
        <motion.button
          onClick={() => window.open(project.projectInfo.link, "_blank")}
          className="cursor-none project-button text-sm md:text-base px-4 py-2"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
        >
          프로젝트 보기
        </motion.button>
      </div>
    </motion.div>
  )
);

ProjectCard.displayName = "ProjectCard";

const Project = () => {
  const [projects, setProjects] = useState<VisitorList[]>([]);

  const fetchProjects = useCallback(async () => {
    try {
      const data = await getVisitor();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <section className="project-section">
      <div className="project-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Project;
