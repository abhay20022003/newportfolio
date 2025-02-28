import React from "react";
import hungerImage from "../assets/hunger.webp";
import portfolioImage from "../assets/portfolio.jpg";

const projects = [
  {
    title: "Hungreli - Food Delivery App",
    description: "Admin panel built for Hungreli - Food Delivery App to manage restaurant details, orders, and more.",
    techStack: ["React.Js", "PHP", "MySQL"],
    link: "https://hungreli.com",
    image: hungerImage,
  },
  {
    title: "My Portfolio",
    description: "A beautifully designed portfolio showcasing my skills, projects, and experience.",
    link: "https://your-portfolio-link.com",
    image: portfolioImage,
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all">
              
              {/* Project Image */}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className="w-full h-56 md:h-64 lg:h-72 object-cover" />
              </a>
              
              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                
                {/* Visit Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition"
                >
                  Visit Project
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
