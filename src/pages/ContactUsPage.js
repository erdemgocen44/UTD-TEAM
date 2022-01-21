import React from "react";
import Footer from "../components/common/Footer";
import Menu from "../components/common/Menu";
import PageHeader from "../components/common/PageHeader";
import TopBar from "../components/common/TopBar";
import Contact from "../components/contactUs/Contact";
import ContactForm from "../components/contactUs/ContactForm";

const ContactUsPage = () => {
  return (
    <div>
      <TopBar />
      <Menu />
      <PageHeader image="assets/images/contact-us-bg.png" title="Contact Us" />
      <Contact />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
