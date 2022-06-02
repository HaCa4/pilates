import { NextPage } from "next";
import Link from "next/link";

/* COMPONENTS */
import InfoCard from "../../components/InfoCard";

/* MUI COMPONENTS */
import { Container } from "@mui/material";

/* CONSTANTS */
import { trainings } from "../../constants/constants";

const Training: NextPage = () => {
  return (
    <div className="page-div">
      <Container className="page-container">
        {trainings.map((training, index) => {
          return (
            <Link key={index} href={"/training/" + training.title.toLowerCase()}>
              <a>
                <InfoCard content={training} />
              </a>
            </Link>
          );
        })}
      </Container>
    </div>
  );
};

export default Training;
