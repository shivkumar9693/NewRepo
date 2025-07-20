import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Hostel Management System",
    description:
      "Role-based web app for hostel operations with admin, subadmin, and student modules. Features mess control, feedback monitoring with image support, and announcements.",
    tech: "Node.js, Express, MongoDB, EJS, Bootstrap",
    github: "https://github.com/shivkumar9693/Hostel_Management",
  },
  {
    title: "Job Portal",
    description:
      "Dynamic job portal with application tracking, real-time notifications, and recruiter approval system. Built using Express and MongoDB with full CRUD support.",
    tech: "Node.js, Express, MongoDB, EJS, Bootstrap",
    github: "https://github.com/shivkumar9693/JOB_Portal",
  },
];

const Projects = () => {
  return (
    <section
      className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500"
      id="projects"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md border dark:border-gray-700 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
              {proj.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              {proj.description}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {proj.tech}
            </p>
            <a
              href={proj.github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
