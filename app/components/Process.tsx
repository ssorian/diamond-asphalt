import { MessageSquare, FileText, HardHat, Truck } from 'lucide-react';

const steps = [
    {
        number: "01",
        title: "Consultation",
        description: "We meet to discuss your vision, requirements, and budget to ensure we understand your goals.",
        icon: <MessageSquare size={32} />
    },
    {
        number: "02",
        title: "Planning",
        description: "Our team creates detailed blueprints and schedules to ensure a smooth construction process.",
        icon: <FileText size={32} />
    },
    {
        number: "03",
        title: "Construction",
        description: "We execute the plan with precision, using high-quality materials and expert craftsmanship.",
        icon: <HardHat size={32} />
    },
    {
        number: "04",
        title: "Delivery",
        description: "We hand over the completed project on time, ensuring everything meets your expectations.",
        icon: <Truck size={32} />
    }
];

const Process = () => {
    return (
        <section className="py-20 bg-background-alt">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-primary">Our Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative p-8 text-center group bg-background-alt rounded-lg shadow-lg border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
                            <span className="absolute top-2 right-4 text-6xl font-black text-white/5 z-0 group-hover:text-primary/10 transition-colors">
                                {step.number}
                            </span>
                            <div className="relative z-10 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                                {step.icon ? (
                                    <div className="w-full h-full flex items-center justify-center text-primary">
                                        {step.icon}
                                    </div>
                                ) : (
                                    <div className="w-full h-full bg-gray-800 rounded-full border border-white/10 flex items-center justify-center text-2xl">
                                        <HardHat size={32} />
                                    </div>
                                )}
                            </div>
                            <h3 className="relative z-10 text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{step.title}</h3>
                            <p className="relative z-10 text-sm text-gray-400 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
