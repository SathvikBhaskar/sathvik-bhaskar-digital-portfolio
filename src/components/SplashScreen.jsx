import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }) => {
    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTextVisible(true);
        }, 500);

        const timer = setTimeout(() => {
            onComplete();
        }, 4000); // Slightly longer for full effect enjoyment

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-1000">
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative z-10"
                >
                    <svg
                        viewBox="0 0 800 200"
                        className="w-[90vw] md:w-[700px] h-auto overflow-visible"
                    >
                        <defs>
                            <linearGradient id="signatureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#2563eb" /> {/* Blue-600 */}
                                <stop offset="50%" stopColor="#3b82f6" /> {/* Blue-500 */}
                                <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan-500 */}
                            </linearGradient>
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Stroke Animation with Gradient - Letter by Letter */}
                        <text
                            x="50%"
                            y="50%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            className="text-7xl md:text-9xl font-bold fill-transparent stroke-[3px]"
                            style={{
                                fontFamily: "'Dancing Script', cursive",
                                stroke: "url(#signatureGradient)",
                                filter: "url(#glow)"
                            }}
                        >
                            {Array.from("Sathvik Bhaskar").map((letter, index) => (
                                <motion.tspan
                                    key={index}
                                    initial={{ opacity: 0, pathLength: 0 }}
                                    animate={{ opacity: 1, pathLength: 1 }}
                                    transition={{
                                        duration: 0.5, // Faster per letter
                                        delay: index * 0.15, // Stagger effect
                                        ease: "easeInOut"
                                    }}
                                >
                                    {letter}
                                </motion.tspan>
                            ))}
                        </text>

                        {/* Fill Animation - Soft Fade In following the stroke */}
                        <text
                            x="50%"
                            y="50%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            className="text-7xl md:text-9xl font-bold fill-foreground"
                            style={{ fontFamily: "'Dancing Script', cursive" }}
                        >
                            {Array.from("Sathvik Bhaskar").map((letter, index) => (
                                <motion.tspan
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: (index * 0.15) + 0.5, // Follows the stroke
                                        ease: "easeOut"
                                    }}
                                >
                                    {letter}
                                </motion.tspan>
                            ))}
                        </text>
                    </svg>
                </motion.div>

                {/* Geometric Rings Backdrop for Light Mode - Tech/Premium Feel */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] -z-10 dark:hidden flex items-center justify-center">
                    {/* Ring 1 - Cyan Dashed */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                        animate={{ opacity: 0.6, scale: 1, rotate: 360 }}
                        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                        className="absolute w-[350px] h-[350px] rounded-full border-[2px] border-dashed border-cyan-400/50"
                    />

                    {/* Ring 2 - Violet Solid Thin */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                        animate={{ opacity: 0.5, scale: 1, rotate: -360 }}
                        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                        className="absolute w-[400px] h-[400px] rounded-full border-[1px] border-violet-500/40"
                    />

                    {/* Ring 3 - Rose Dotted Pulse */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 0.4, scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                        className="absolute w-[280px] h-[280px] rounded-full border-[4px] border-dotted border-rose-400/30"
                    />

                    {/* Central Glow */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute w-[200px] h-[200px] bg-blue-400/10 blur-[50px] rounded-full"
                    />
                </div>

                {/* Subtle dark mode glow (existing, slightly tweaked) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/20 dark:bg-primary/10 blur-[100px] rounded-full -z-10 animate-pulse hidden dark:block"></div>
            </div>
        </div>
    );
};

export default SplashScreen;
