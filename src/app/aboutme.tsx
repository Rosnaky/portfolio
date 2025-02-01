import styles from "./aboutme.module.css";

const AboutMe = () => {

    return (
        <>
            <div className="flex justify-center pt-16 bg-black overflow-hidden">
                <div className="w-2/3">
                    <div className={`${styles.header} text-left text-teal-100 font-semibold text-8xl`}>
                        ABOUT ME
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-6 bg-black overflow-hidden">
                <div className="w-2/3">
                    <div className="relative w-48 h-48 overflow-hidden rounded-full border-4 border-gray-700 shadow-lg">
                        <img src="./pfp.jpg" alt="Headshot" className="object-cover w-full h-full"/>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AboutMe;