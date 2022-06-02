import Link from "next/link";
import { NextPage } from "next";

/* COMPONENTS */
import InfoCard from "../../components/InfoCard";

/* MUI COMPONENTS */
import { Container } from "@mui/material";

/* CONSTANTS */
import { nutritions } from "../../constants/constants";

const Nutrition: NextPage = () => {
  return (
    <div className="page-div">
      <Container className="page-container">
        {nutritions.map((nutrition, index) => {
          return (
            <Link key={index} href={"/nutrition/" + nutrition.title.toLowerCase()}>
              <a>
                <InfoCard content={nutrition} />
              </a>
            </Link>
          );
        })}
      </Container>
    </div>
  );
};

export default Nutrition;
