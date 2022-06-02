import Image from "next/image";

/* NEXT.JS TYPES */
import { GetStaticPaths, GetStaticPropsContext, NextPage } from "next";

/* TYPES */
import { Nutrition, PropsOfSubpages } from "../../constants/types.js";

/* MUI COMPONENTS */
import { Container, Typography } from "@mui/material";

/* CONSTANTS */
import { nutritions, articleSample } from "../../constants/constants.js";

const NutritionsDetailPage: NextPage<PropsOfSubpages> = (props) => {
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
  const paths = nutritions.map((nutrition, index) => {
    return {
      params: { title: nutrition.title.toLowerCase() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const nutrition: Nutrition = nutritions.filter((nutrition) => {
    return nutrition.title.toLowerCase() == context.params?.title;
  })[0];

  return {
    props: { content: nutrition },
  };
};

export default NutritionsDetailPage;
