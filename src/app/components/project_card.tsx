import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    languages: string[];
    frameworks: string[];
}

const ProjectCard = ({ title, description, link, languages, frameworks }: ProjectCardProps) => {
    return (
        <div className="relative w-80 bg-[#2A2D43] text-[#B2DFDB] p-6 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-2xl font-bold mb-2">
                {title}
            </h2>
            <p className="text-base mb-4 leading-relaxed text-gray-400">
                {description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
                {languages.map((language, index) => (
                    <span key={index} className="bg-[#1E1F2B] text-[#B2DFDB] text-sm px-3 py-1 rounded-full">
                        {language}
                    </span>
                ))}
            {/* </div> */}

            {/* <div className="flex flex-wrap gap-2 mb-4"> */}
                {frameworks.map((fm, index) => (
                    <span key={index} className="bg-[#202020] text-[#FCE38A] text-sm px-3 py-1 rounded-full">
                        {fm}
                    </span>
                ))}
            </div>

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 mt-2 text-[#FCE38A] hover:text-teal-100 transition-colors duration-200 "
            >
                <FaGithub size={28} />
            </a>
        </div>
    );
}

export default ProjectCard;
