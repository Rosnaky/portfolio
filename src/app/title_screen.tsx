import ScrollIndicator from "./components/scroll_down_indicator";
import ThreeBackground from "./three_screen";
import styles from "./title_screen.module.css";

const TitleScreen: React.FC = () => {
    return (
        <div className="">
            {/* Three.js Background */}
            <div className="absolute top-0 left-0">
                <ThreeBackground />
            </div>

            {/* Window Drop */}
            <div className={`${styles.windowDrop} z-10`}></div>

            {/* Title Container */}
            <div className={`relative ${styles.titleContainer} grid grid-rows-6 grid-cols-6 gap-4 z-20`}>
                <div className="row-start-2 row-end-5 col-start-2 col-end-5 flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-center font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl py-2">
                        <div className="text-teal-200">RONAK</div>
                        <div>PATEL</div>
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl">
                        Software Engineering @ UWaterloo
                    </div>
                </div>
            </div>

            <ScrollIndicator/>
        </div>
    );
};

export default TitleScreen;
