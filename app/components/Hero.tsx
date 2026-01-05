import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-start text-white overflow-hidden z-[1]">
            <Image
                src="/images/Vecindario.jpg"
                alt="Construction Site"
                fill
                priority
                className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 to-black/40 z-[2]"></div>
            <div className="max-w-7xl mx-auto px-4 w-full relative z-[3]">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight max-w-4xl drop-shadow-lg text-white">
                    Building the Future, Restoring the Past.
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl opacity-90 text-gray-200">
                    Premium construction and asphalt services for commercial and residential projects.
                </p>
                <Link
                    href="/free-quote"
                    className="inline-block px-10 py-4 bg-primary hover:bg-primary-dark text-white font-semibold text-lg rounded transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-primary/20"
                >
                    Start Your Project
                </Link>
            </div>
        </section>
    );
};

export default Hero;
