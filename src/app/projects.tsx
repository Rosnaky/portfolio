import { useEffect, useState } from "react";
import styles from "./projects.module.css";
import ProjectCard from "./components/project_card";

interface Project {
    title: string;
    description: string;
    link: string;
}

const Projects = () => {

    const [projectsList, setProjectsList] = useState<Project[]>([]);
    
      useEffect(() => {
        fetch("./projects.json")
          .then((response) => response.json())
          .then((data) => setProjectsList(data));
      }, []);

    return (
        <>
            <div className={`${styles.header} flex justify-center pt-24 text-teal-100 text-8xl font-extrabold overflow-hidden`}>
                Projects    
            </div>  
            <div className="flex flex-wrap justify-center gap-8 pt-12">
            {projectsList.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </>
    );
}

export default Projects;