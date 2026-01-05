"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <Link href="/" className={`text-2xl font-bold uppercase tracking-wider transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'}`}>
                    Diamond Asphalt
                </Link>
                <ul className="hidden md:flex gap-8 list-none">
                    {['home', 'aboutus', 'services', 'projects', 'resources', 'careers', 'contact', 'clienthub'].map((link) => (
                        <li key={link}>
                            <Link
                                href={`/${link}`}
                                className={`text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-primary ${scrolled ? 'text-white' : 'text-white'}`}
                            >
                                {link.replace('us', ' Us').replace('hub', ' Hub')}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button
                    className={`md:hidden bg-transparent border-none cursor-pointer ${scrolled ? 'text-white' : 'text-white'}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>
            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-white/10 md:hidden flex flex-col items-center py-8 gap-6 shadow-xl">
                    {['home', 'aboutus', 'services', 'projects', 'resources', 'careers', 'contact', 'clienthub'].map((link) => (
                        <Link
                            key={link}
                            href={`/${link}`}
                            className="text-lg font-medium uppercase tracking-wide text-white hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.replace('us', ' Us').replace('hub', ' Hub')}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
