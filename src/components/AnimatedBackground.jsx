
const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-background transition-colors duration-700">
            {/* Mesh Gradient Blobs - Adjusted for Light/Dark */}
            <div className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-primary/20 dark:bg-primary/10 mix-blend-multiply dark:mix-blend-screen blur-[140px] animate-blob filter" />
            <div className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-purple-300/20 dark:bg-accent/10 mix-blend-multiply dark:mix-blend-screen blur-[140px] animate-blob animation-delay-2000 filter" />
            <div className="absolute -bottom-[10%] left-[10%] w-[80vw] h-[80vw] rounded-full bg-pink-200/20 dark:bg-purple-500/10 mix-blend-multiply dark:mix-blend-screen blur-[140px] animate-blob animation-delay-4000 filter" />

            {/* Premium Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-[0.05] dark:opacity-[0.15] pointer-events-none"></div>

            {/* Light Mode: Elegant Geometric Pattern */}
            <div className="absolute inset-0 dark:hidden pointer-events-none opacity-[0.02]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
            </div>

            {/* Noise Texture Overlay for depth */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

            {/* Light Mode Softener Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-transparent to-white/60 dark:hidden pointer-events-none"></div>
        </div>
    );
};

export default AnimatedBackground;
