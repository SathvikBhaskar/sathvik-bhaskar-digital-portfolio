import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const GlowingCard = ({ children, className, containerClassName }) => {
    return (
        <div className={cn("relative group", containerClassName)}>
            <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    backgroundSize: "200% 200%",
                }}
            />
            <div className={cn("relative h-full rounded-2xl", className)}>
                {children}
            </div>
        </div>
    );
};

export default GlowingCard;
