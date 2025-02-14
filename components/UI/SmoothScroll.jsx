// components/SmoothScroll.tsx
"use client"
import { useEffect, useState } from 'react';
import lenis from 'lenis';


const SmoothScroll = () => {
    const [lenisInstance, setLenisInstance] = useState(null);

    useEffect(() => {
        const lenisInstance = new lenis({
            duration: 0.75, // Adjust duration
            easing: (t) =>
                t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,

        });

        function raf(time) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        setLenisInstance(lenisInstance);

        // Cleanup on component unmount
        return () => {
            if (lenisInstance) {
                lenisInstance.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (lenisInstance) {
            lenisInstance.on('scroll', () => {
            });
        }
    }, [lenisInstance]);

    return null;
};

export default SmoothScroll;

