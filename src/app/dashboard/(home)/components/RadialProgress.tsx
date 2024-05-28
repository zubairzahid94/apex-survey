import React from "react";

const RadialProgress = ({
    value,
    max,
    color,
}: {
    value: number;
    max: number;
    color: string;
}) => {
    const percentage = (value / max) * 100;
    const halfCircle = percentage > 50 ? "rotate-180" : "";
    const rotate = percentage > 50 ? (percentage - 50) * 3.6 : percentage * 3.6;

    return (
        <div className="relative w-24 h-24 flex items-center justify-center">
            <div className={`absolute size-[85%] rounded-full bg-${color}`} />
            <div
                className="absolute w-full h-full rounded-full bg-transparent border-4 border-apex-blue transform origin-center rotate-180"
                style={{ clip: "rect(0rem, 4rem, 4rem, 0rem)" }}
            />
            <div
                className={`absolute w-full h-full rounded-full bg-transparent border-4 border-apex-blue transform origin-center ${halfCircle}`}
                style={{
                    clip: "rect(0rem, 4rem, 4rem, 0rem)",
                    transform: `rotate(${rotate}deg)`,
                }}
            />
            <div className="absolute flex items-center justify-center w-full h-full text-lg font-bold text-apex-blue">
                {Math.round(percentage)}%
            </div>
        </div>
    );
};

export default RadialProgress;