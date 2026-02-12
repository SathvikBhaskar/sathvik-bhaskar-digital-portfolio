import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const AnimatedBackground = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden">
            {/* Background gradients based on theme */}
            <div className={`absolute inset-0 transition-colors duration-500 ${theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black'
                    : 'bg-gradient-to-br from-blue-50 via-white to-blue-100'
                }`} />

            {/* Animated blobs */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 blur-3xl">
                <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl animate-blob ${theme === 'dark' ? 'bg-purple-700' : 'bg-blue-300'
                    }`} />
                <div className={`absolute top-0 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000 ${theme === 'dark' ? 'bg-indigo-700' : 'bg-cyan-300'
                    }`} />
                <div className={`absolute -bottom-32 left-1/3 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000 ${theme === 'dark' ? 'bg-blue-800' : 'bg-sky-300'
                    }`} />
            </div>
        </div>
    );
};

export default AnimatedBackground;
