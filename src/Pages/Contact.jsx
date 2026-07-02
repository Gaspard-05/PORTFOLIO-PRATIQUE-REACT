import ContactComponent from "../components/ContactComponent";


const Contact = () => {
  return (
       
     <> 
      <ContactComponent 
        titresection="Contact"
        description="Got a question or proposal, or just want to say hello? Go ahead. You know what to do."
        label1="Your Name"
        label2="Email Address"
        message="Your Message"
        btnEnvoyer="Send Message"
      />
    </>
  );
};

export default Contact;