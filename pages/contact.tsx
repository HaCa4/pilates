import { NextPage } from "next";

/* COMPONENTS  */
import ContactForm from "../components/contactPage/ContactForm";
import ReachUs from "../components/contactPage/ReachUs";

/* CSS MODULE */
import styles from "../styles/Contact.module.css";

const contact: NextPage = () => {
  return (
    <div className="page-div">
      <ContactForm styles={styles} />
      <ReachUs styles={styles} />
    </div>
  );
};

export default contact;
