import QuoteHero from '../components/QuoteHero';
import ContactInfo from '../components/ContactInfo';
import QuoteForm from '../components/QuoteForm';
import Footer from '../components/Footer';
import SectionSeparator from '../components/SectionSeparator';

export default function FreeQuote() {
    return (
        <main>
            <QuoteHero />
            <SectionSeparator />
            <ContactInfo />
            <SectionSeparator />
            <QuoteForm />
            <SectionSeparator />
            <Footer />
        </main>
    );
}
