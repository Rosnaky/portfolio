import { useState, useEffect } from "react";
import ProjectCard from "./components/project_card";
import styles from "./projects.module.css";

interface Project {
    title: string;
    description: string;
    link: string;
    languages: string[];
    frameworks: string[];
}

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch("/projects.json") // Load the projects from a JSON file
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error loading projects:", error));
    }, []);

    return (
        <div className={`${styles.header} flex flex-col items-center pt-24`}>
            <h3 className="text-xl text-teal-100 opacity-30">
                to keep myself busy
            </h3>
            <h1 className="text-8xl font-extrabold text-teal-100 uppercase tracking-wide mb-12">
                Projects
            </h1>

            {/* Grid layout for project cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        languages={project.languages}
                        frameworks={project.frameworks}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
