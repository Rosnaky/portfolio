import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase } from "lucide-react";
import styles from "./work_experience_timeline.module.css"

interface WorkExperience {
  title: string;
  company: string;
  date: string;
  description: string;
  icon: string;
}

const WorkExperienceTimeline = () => {
  const [workExperience, setWorkExperience] = useState<WorkExperience[]>([]);

  useEffect(() => {
    fetch("./work-experience.json")
      .then((response) => response.json())
      .then((data) => setWorkExperience(data));
  }, []);

  return (
    <VerticalTimeline className={`${styles.font} bg-black text-xl`}>
      {workExperience.map((job, index) => (
        <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#2A2D43", color: "#B2DFDB" }}
            contentArrowStyle={{ borderRight: "7px solidrgb(8, 10, 15)" }}
            date={job.date}
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={
                <div className={`${styles.icon_crop_container}`}>
                    <img alt="icon" src={job.icon} className={`${styles.icon_cropped}`}/>
                </div>
            }
        >
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <h4 className="text-md text-gray-300">{job.company}</h4>
            <p className="text-sm text-gray-400">{job.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default WorkExperienceTimeline;
