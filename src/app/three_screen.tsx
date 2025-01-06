import React, { useRef, useEffect } from 'react';

const ThreeScreen: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Three.js scene
        }
    }, []);

    return <div ref={containerRef} />;
};

export default ThreeScreen;