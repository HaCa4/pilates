import Image from "next/image";

/* NEXT.JS TYPES */
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";

/* TYPES */
import { PropsOfSubpages, Blog } from "../../constants/types";

/* MUI COMPONENTS */
import { Container, Typography } from "@mui/material";

/* CONSTANTS */
import { blogs, articleSample } from "../../constants/constants";

const BlogDetailPage: NextPage<PropsOfSubpages> = (props: PropsOfSubpages) => {
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
        <Typography>{articleSample}</Typography>
      </Container>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogs.map((blog, index) => {
    return {
      params: { title: blog.title.toLowerCase() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const blog: Blog = blogs.filter((blog) => {
    return blog.title.toLowerCase() == context.params?.title;
  })[0];

  return {
    props: { content: blog },
  };
};

export default BlogDetailPage;
