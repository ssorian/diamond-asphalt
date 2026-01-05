import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="flex flex-col gap-6">
                        <h3 className="text-xl font-bold text-primary">Diamond Asphalt</h3>
                        <div className="flex flex-col gap-3 text-gray-400 text-sm">
                            <p>123 Construction Ave.</p>
                            <p>Cityville, ST 12345</p>
                            <p>Phone: (555) 123-4567</p>
                            <p>Email: info@diamondasphalt.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-xl font-bold text-primary">Quick Links</h3>
                        <ul className="flex flex-col gap-3 list-none">
                            {['home', 'aboutus', 'services', 'projects', 'contact'].map((link) => (
                                <li key={link}>
                                    <Link href={`/${link}`} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm capitalize">
                                        {link.replace('us', ' Us')}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-xl font-bold text-primary">Hours</h3>
                        <div className="flex flex-col gap-3 text-gray-400 text-sm">
                            <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                            <p>Sat: 9:00 AM - 2:00 PM</p>
                            <p>Sun: Closed</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-xl font-bold text-primary">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                                <Linkedin size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                                <Twitter size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Diamond Asphalt. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
