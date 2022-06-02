import Image from "next/image";

/* NEXT.JS TYPES */
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";

/* TYPES */
import { PropsOfSubpages, Training } from "../../constants/types.js";

/* MUI COMPONENTS */
import { Container, Typography } from "@mui/material";

/* CONSTANTS */
import { trainings, articleSample } from "../../constants/constants.js";

const TrainingDetailPage: NextPage<PropsOfSubpages> = (props) => {
  return (
    <div className="page-div">
      <Container className="subContainer">
        <Typography variant="h4" className="subHead">
          {props.content.title}
        </Typography>
        <Image
          src={props.content.image}
          alt={props.content.title}
          width={400}
          height={400}
          layout="fixed"
        />
        <Typography sx={{ height: "70½" }}>{articleSample}</Typography>
      </Container>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = trainings.map((training, index) => {
    return {
      params: { title: training.title.toLowerCase() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const training: Training = trainings.filter((training) => {
    return training.title.toLowerCase() == context.params?.title;
  })[0];

  return {
    props: { content: training },
  };
};

export default TrainingDetailPage;
