import { useEffect, useState } from "react";
import styles from "./splash_screen.module.css";

interface SplashScreenProps {
    onFinish: () => void;
}


const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {

    const [step, setStep] = useState<number>(0);

    useEffect(() => {
        const steps = [0, 1, 2];
        // eslint-disable-next-line prefer-const
        let timeouts: NodeJS.Timeout[] = [];

        steps.forEach((_, i) => {
            timeouts.push(
                setTimeout(() => setStep(i), i*500)
            );
        });

        timeouts.push(
            setTimeout(() => {
              setStep(3); // Fade out
            //   setTimeout(() => onFinish(), 1000); // Trigger transition to main site
            }, 3000)
        );
        timeouts.push(
            setTimeout(() => {
              setStep(4); // Fade out
            //   setTimeout(() => onFinish(), 1000); // Trigger transition to main site
            }, 3500)
        );
        timeouts.push(
            setTimeout(() => onFinish(), 4000)
        )

        return () => timeouts.forEach(clearTimeout);
    }, [onFinish]);

    return (
        <div className={styles.splashContainer}>
            <div className={`${styles.initials} ${step >= 1 && step <= 3 ? styles.show : styles.place}`}>R</div>
            <div className={`${styles.initials} ${step >= 2 && step <= 3 ? styles.show : styles.place}`}>P</div>
            <div className={`${styles.cover}`}></div>
        </div>
    );

};

export default SplashScreen;