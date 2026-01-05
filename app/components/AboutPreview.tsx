import Image from 'next/image';
import Link from 'next/link';

const AboutPreview = () => {
    return (
        <section className="py-20 bg-background-alt">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col gap-6">
                    <h2 className="text-4xl font-bold text-white">Building Trust Since 1995</h2>
                    <p className="text-lg leading-relaxed text-gray-400">
                        Diamond Asphalt is a leader in the construction industry, dedicated to delivering superior quality and exceptional service. With decades of experience, we have built a reputation for reliability, innovation, and integrity. We don't just build structures; we build lasting relationships with our clients.
                    </p>
                    <Link
                        href="/aboutus"
                        className="self-start px-8 py-3 border-2 border-primary text-primary font-bold transition-all duration-300 hover:bg-primary hover:text-white mt-4"
                    >
                        Learn More About Us
                    </Link>
                </div>
                <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
                    <Image
                        src="/images/about_us_image_1767639018266.png"
                        alt="Our Team"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
