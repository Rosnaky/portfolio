import ThreeBackground from "./three_screen";
import styles from "./title_screen.module.css"

const TitleScreen: React.FC = () => {

    return (
        <div>
            <div className={`"flex h-0 z-10" ${styles.windowDrop}`}></div>
            <ThreeBackground/>
            <div className={`${styles.titleContainer} " grid grid-rows-4 grid-cols-6 gap-4"`}>
                <div className="row-start-2 row-end-4 col-start-2 col-end-4 ">
                    <div className="flex gap-8 items-center font-semibold py-2 text-8xl">
                        <div className="text-teal-200">
                            RONAK
                        </div>
                        <div>
                            PATEL
                        </div>
                    </div>

                    <div className="text-5xl">
                        Software Engineering @ UWaterloo
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TitleScreen;