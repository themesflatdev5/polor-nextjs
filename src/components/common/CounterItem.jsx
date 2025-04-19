"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from 'next/dynamic';
import "odometer/themes/odometer-theme-default.css";

// Sử dụng dynamic import với suspense: false để tránh vấn đề hydration
const Odometer = dynamic(() => import('react-odometerjs'), {
  ssr: false,
  suspense: false,
  loading: () => <span className="fw-6">0</span>,
});

const CounterItem = ({ achievement }) => {
    const ref = useRef(null);
    const [showNumber, setShowNumber] = useState(false);
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);
    
    useEffect(() => {
        if (!mounted) return;
        
        const handleScroll = () => {
            if (!ref.current || showNumber) return;
            const rect = ref.current.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                setShowNumber(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [showNumber, mounted]);
    
    return (
        <div ref={ref} className="counter-item style-default">
            <div className="counter-number">
                {mounted ? (
                    <Odometer
                        value={showNumber ? achievement.number : 0}
                        format="(,ddd)"
                        duration={2000}
                        className="fw-6"
                    />
                ) : (
                    <span className="fw-6">0</span>
                )}
                {achievement.sub && (
                    <span className="sub">{achievement.sub}</span>
                )}
            </div>
            <div className="text-body-2 text_mono-gray-5 -mt_7">
                {achievement.desc}
            </div>
        </div>
    );
};

export default CounterItem;