import { MapPin, Phone, Mail } from 'lucide-react';

const ContactInfo = () => {
    return (
        <section className="py-12 bg-background border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20">
                        <MapPin size={24} />
                    </div>
                    <h3 className="font-bold text-lg text-white">Visit Us</h3>
                    <p className="text-gray-400">123 Construction Ave.<br />Cityville, ST 12345</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20">
                        <Phone size={24} />
                    </div>
                    <h3 className="font-bold text-lg text-white">Call Us</h3>
                    <p className="text-gray-400">(555) 123-4567<br />Mon-Fri, 8am-6pm</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20">
                        <Mail size={24} />
                    </div>
                    <h3 className="font-bold text-lg text-white">Email Us</h3>
                    <p className="text-gray-400">info@diamondasphalt.com<br />We reply within 24h</p>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
