import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

export const RevealOnScroll = ({ children }) => {
    const ref = useRef(); // Fix: Call useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                ref.current.classList.add("visible");
            }
        }, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" });

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []); // Fix: Add dependency array

    return (
        <div ref={ref} className="reveal">
            {children}
        </div>
    );
};

RevealOnScroll.propTypes = {
    children: PropTypes.node.isRequired,
};

export default RevealOnScroll;
