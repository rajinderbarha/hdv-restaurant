import { useEffect, useState } from "react";
import { IoArrowUpOutline } from "react-icons/io5";
import style from "./ScrollToTopButton.module.css";

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button className={`${style.scroll_to_top}`}
                    onClick={scrollToTop}
                >
                    <IoArrowUpOutline />
                </button>
            )}

        </>
    );
};

export default ScrollToTopButton;
