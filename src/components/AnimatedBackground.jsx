
const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-background transition-colors duration-700">
            {/* Mesh Gradient Blobs - Multi-Color Party for Light Mode */}
            <div className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-violet-400/40 dark:bg-primary/10 mix-blend-multiply dark:mix-blend-screen blur-[100px] animate-blob filter" />
            <div className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-cyan-400/40 dark:bg-accent/10 mix-blend-multiply dark:mix-blend-screen blur-[100px] animate-blob animation-delay-2000 filter" />
            <div className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[80vw] rounded-full bg-amber-300/40 dark:bg-purple-500/10 mix-blend-multiply dark:mix-blend-screen blur-[100px] animate-blob animation-delay-4000 filter" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-rose-400/30 dark:hidden mix-blend-multiply blur-[100px] animate-blob animation-delay-6000 filter" />

            {/* Aurora Effect - Rotating Colorful Conic Gradient (Light Mode Only) */}
            <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#e2e8f0_0%,#f0f9ff_50%,#fdf4ff_100%)] dark:hidden opacity-30 animate-[spin_60s_linear_infinite] mix-blend-soft-light -z-20 scale-150"></div>

            {/* Premium Grid Pattern Overlay - Darker for Light Mode */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-[0.2] dark:opacity-[0.15] pointer-events-none"></div>

            {/* Light Mode: Elegant Geometric Pattern - Slightly more visible */}
            <div className="absolute inset-0 dark:hidden pointer-events-none opacity-[0.05]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
            </div>

            {/* Noise Texture Overlay for depth */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
        </div>
    );
};

export default AnimatedBackground;
