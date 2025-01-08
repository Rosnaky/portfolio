import ThreeBackground from "./three_screen";
import styles from "./title_screen.module.css";

const TitleScreen: React.FC = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Three.js Background */}
            <div className="absolute inset-0 z-0">
                <ThreeBackground />
            </div>

            {/* Window Drop */}
            <div className={`${styles.windowDrop} z-10`}></div>

            {/* Title Container */}
            <div className={`${styles.titleContainer} absolute grid grid-rows-6 grid-cols-6 gap-4 z-20`}>
                <div className="row-start-2 row-end-4 col-start-2 col-end-4">
                    <div className="flex gap-8 items-center font-semibold py-2 text-8xl">
                        <div className="text-teal-200">RONAK</div>
                        <div>PATEL</div>
                    </div>
                    <div className="text-4xl">Software Engineering @ UWaterloo</div>
                </div>
            </div>
        </div>
    );
};

export default TitleScreen;
