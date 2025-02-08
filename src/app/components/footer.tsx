import styles from "./work_experience_timeline.module.css";

const Footer = () => {
    return (
        <footer className={`${styles.font} bg-black text-[#B2DFDB] py-6 mt-8`}>
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-md">&copy; {new Date().getFullYear()} Ronak Patel. All rights reserved.</p>
                <div className="mt-2">
                    <a 
                        href="https://github.com/rosnaky"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-100 hover:text-teal-300 opacity-50"
                    >
                        GitHub
                    </a>
                    <span className="mx-2">|</span>
                    <a 
                        href="https://www.linkedin.com/in/rosnaky"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-100 hover:text-teal-300 opacity-50"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
