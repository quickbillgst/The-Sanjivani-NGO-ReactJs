import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import Funds from '../components/Funds';
import PageHeader from "../components/PageHeader";
import GramVikasCards from "../components/GramVikasCards";
import GramVikasInfo from "../components/GramVikasInfo";
import EducationFocus from "../components/EducationFocus";

export default function About() {
    return (
        <>
            <Navbar />
            <PageHeader title="About Us" path="/about" name="About Us" />
            <GramVikasInfo />
            <EducationFocus />
            <Landing />
            <Funds />
            <GramVikasCards />
            <Footer />
            <BackToTop />
        </>
    );
}