import { useState, useEffect } from 'react';

const useWindowScroll = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll, { passive: true });
        };
    }, []);

    return scrollY;
};

export default useWindowScroll;
