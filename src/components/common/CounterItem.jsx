"use client";
import { useEffect, useRef, useState } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

const CounterItem = ({ achievement }) => {
    const ref = useRef(null);
    const [showNumber, setShowNumber] = useState(false);
    useEffect(() => {
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
    }, [showNumber]);
    return (
        <div ref={ref} className="counter-item style-default">
            <div className="counter-number">
                <Odometer
                    value={showNumber ? achievement.number : 0}
                    format="(,ddd)"
                    duration={2000}
                    className="fw-6 "
                />
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
