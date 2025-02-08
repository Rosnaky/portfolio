
import styles from "./project_card.module.css";

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
}

const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
    return (
        <div className={`${styles.card} bg-gray-800 p-6 rounded-lg shadow-lg`}>
            <h2 className={`${styles.cardTitle} text-2xl font-bold text-teal-100`}>
                {title}
            </h2>
            <p className={`${styles.cardDescription} text-teal-300`}>
                {description}
            </p>
            <a 
                href={link} 
                className={`${styles.cardLink} text-teal-400 hover:text-teal-500 mt-2 inline-block`}
                target="_blank" 
                rel="noopener noreferrer"
            >
                View Project
            </a>
        </div>
    );
}

export default ProjectCard;