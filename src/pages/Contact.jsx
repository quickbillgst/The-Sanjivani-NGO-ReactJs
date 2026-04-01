import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import BackToTop from '../components/BackToTop';
import PageHeader from "../components/PageHeader";
import GramVikasCards from "../components/GramVikasCards";

export default function Contact() {
    return (
        <>
            <Navbar />
            <PageHeader title="Contact Us" path="contact" name="Contact" />
            <ContactForm />
            <GramVikasCards />
            <Footer />
            <BackToTop />
        </>
    );
}