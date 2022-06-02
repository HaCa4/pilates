import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

//COMPONENTS
import HomeInfoCard from "../components/homePage/HomeInfoCard";
import HomeSelectionCard from "../components/homePage/HomeSelectionCard";

const Home: NextPage = () => {
  return (
    <div className="page-div">
      <HomeInfoCard styles={styles} />
      <HomeSelectionCard styles={styles} />
    </div>
  );
};

export default Home;
