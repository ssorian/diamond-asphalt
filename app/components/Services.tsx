import { Hammer, Ruler, Home, ClipboardCheck } from 'lucide-react';

const services = [
    {
        title: "Civil Engineering",
        description: "Expert execution of large-scale infrastructure projects with precision and durability.",
        icon: <Hammer size={40} />
    },
    {
        title: "Architectural Design",
        description: "Innovative and functional designs tailored to your specific needs and vision.",
        icon: <Ruler size={40} />
    },
    {
        title: "Remodeling",
        description: "Transforming existing spaces into modern, efficient, and beautiful environments.",
        icon: <Home size={40} />
    },
    {
        title: "Site Supervision",
        description: "Comprehensive oversight to ensure safety, quality, and timeline adherence.",
        icon: <ClipboardCheck size={40} />
    }
];

const Services = () => {
    return (
        <section className="py-20 bg-background" id="services">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-primary">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-background-alt p-8 rounded-lg shadow-lg border border-white/5 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary group"
                        >
                            <div className="w-20 h-20 mx-auto mb-6 bg-black/30 rounded-full flex items-center justify-center text-primary border border-white/10 group-hover:border-primary/50 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
