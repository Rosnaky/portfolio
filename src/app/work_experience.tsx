import WorkExperienceTimeline from "./components/work_experience_timeline";
import styles from "./work_experience.module.css";


const WorkExperience = () => {
    return ( 
        <>
            <div className="flex justify-center pt-24 pb-16 bg-black overflow-hidden">
                <div className="">
                    <div className={`${styles.header} text-left text-teal-100 text-8xl font-extrabold pt-15`}>
                        Work Experience
                    </div>
                </div>
            </div>

            <WorkExperienceTimeline/>
        </>
    );
}

export default WorkExperience;