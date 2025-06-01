import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Program from "@/components/Program";
import Meetings from "@/components/Meetings";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Program />
      <Meetings />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
