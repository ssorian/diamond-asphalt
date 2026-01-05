const QuoteHero = () => {
    return (
        <section className="relative h-[60vh] w-full flex items-center justify-center text-white overflow-hidden bg-background">
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[1]"></div>
            <div className="relative z-[2] text-center px-4 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Request a Free Quote</h1>
                <p className="text-xl md:text-2xl opacity-90">
                    Let's build something great together. Tell us about your project.
                </p>
            </div>
        </section>
    );
};

export default QuoteHero;
