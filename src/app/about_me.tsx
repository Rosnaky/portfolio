import styles from "./aboutme.module.css";

const AboutMe = () => {

    return (
        <>
            <div className="flex justify-center pt-16 bg-black overflow-hidden">
                <div className="w-2/3">
                    <div className={`${styles.header} text-left text-teal-100 text-8xl font-extrabold`}>
                        About Me
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-6 bg-black overflow-hidden">
                <div className="w-1/5">
                    <div className="relative w-64 h-64 overflow-hidden rounded-full border-4 border-gray-700 shadow-lg">
                        <img src="./pfp.jpg" alt="Headshot" className="object-cover w-full h-full"/>
                    </div>
                </div>
                <div className={`${styles.body} w-1/2 text-xl`}>
                    <div>
                        I like learning and building things—whether it’s predictive models, firmware, or system architectures. I enjoy keeping myself busy with work that challenges me to think and problem-solve. 
                        Math, algorithms, and design are areas I naturally gravitate toward, and I’m always looking for new ways to explore them.

                    </div>
                    <div className="pt-10 font-bold">
                        If it’s interesting and technical, I’m probably working on it, or eventually will!
                    </div>
                    <div className="pt-6 opacity-70">
                        If I’m not working, I’m flying a glider or Cessna 172 across Ontario! :0
                    </div>
                </div>
            </div>
        </>
    )

}

export default AboutMe;