"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "shoes animation",
    description: "Project 1 description",
    image: "/images/projects/shoes.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/design/jI70JKRVmtJ54PyeDJshCq/nike?m=auto&t=s1Juj9hlBQ0tzAhA-6",
  },
  
  {
    id: 2,
    title: "car",
    description: "Project 2 description",
    image: "/images/projects/car.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/design/j6NwTPygzl3evmgQNU4IhW/Untitled?m=auto&t=s1Juj9hlBQ0tzAhA-6",
  },
  {
    id: 3,
    title: "Dashboard",
    description: "Project 3 description",
    image: "/images/projects/dash.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/design/pihJP5JjpJ7z5N3LJbLYXO/dshboard?m=auto&t=s1Juj9hlBQ0tzAhA-6",
  },
  {
    id: 4,
    title: "smart home app",
    description: "Project 4 description",
    image: "/images/projects/smart.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/design/j5nB8eu2Lz1w0XnKaDH78B/heath-tracker?m=auto&t=s1Juj9hlBQ0tzAhA-6",
  },
  {
    id: 5,
    title: "chat app",
    description: "Authentication and CRUD operations",
    image: "/images/projects/chat.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/design/AxkvnVNHHUh23RRmPkAdFI/chat?m=auto&t=s1Juj9hlBQ0tzAhA-6",
  },
  {
    id: 6,
    title: "fitness app",
    description: "Project 5 description",
    image: "/images/projects/fit.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/design/j5nB8eu2Lz1w0XnKaDH78B/heath-tracker?m=auto&t=s1Juj9hlBQ0tzAhA-6",
  },
  {
    id: 7,
    title: "social media app",
    description: "Project 5 description",
    image: "/images/projects/insta.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/design/moUQwAEf6iObzQW2dNfS5e/instagram?m=auto&t=s1Juj9hlBQ0tzAhA-6",
  },
  {
    id: 8,
    title: "Grocery app",
    description: "grocery app design ",
    image: "/images/projects/Rectangle.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/design/LDhbVI6Yp76kbJy3SYj3oL/grocery?node-id=0-1&t=lAw6uHEZZkjhciGB-1",
  },
  {
    id: 9,
    title: "ShoeBox app ",
    description: "shoeBox app description",
    image: "/images/projects/Rectangle (1).png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/design/WLhkDtkiG4mHiODVXf4sK1/shoes-store?t=lAw6uHEZZkjhciGB-1",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
