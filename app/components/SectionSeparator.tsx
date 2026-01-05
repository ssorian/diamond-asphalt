const SectionSeparator = () => {
    return (
        <div className="relative w-full h-px z-20 pointer-events-none">
            {/* Subtle Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* Gold Glow/Blur Effect - Enhanced */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-primary/20 blur-[80px] rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-16 bg-primary/30 blur-[40px] rounded-full"></div>
        </div>
    );
};

export default SectionSeparator;
