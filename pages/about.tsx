import { NextPage } from "next";
/* COMPONENTS */
import InstructorCard from "../components/aboutPage/InstructorCard";

/* CSS MODULE */
import styles from "../styles/About.module.css";

/* CONSTANTS */
import { instructor, nutritionist } from "../constants/constants";

const About: NextPage = () => {
  return (
    <div className="page-div">
      <InstructorCard content={instructor} styles={styles} />
      <InstructorCard content={nutritionist} styles={styles} />
    </div>
  );
};

export default About;
