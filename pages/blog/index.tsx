import Image from "next/image";
import Link from "next/link";

/* NEXT.JS TYPES */
import { NextPage } from "next";

import InfoCard from "../../components/InfoCard";

/* MUI COMPONENTS */
import { Container } from "@mui/material";

/* CONSTANTS */
import { blogs } from "../../constants/constants";

const Blog: NextPage = () => {
  return (
    <div className="page-div">
      <Container className="page-container">
        {blogs.map((blog, index) => {
          return (
            <Link key={index} href={"/blog/" + blog.title.toLowerCase()}>
              <a>
                <InfoCard content={blog} />;
              </a>
            </Link>
          );
        })}
      </Container>
    </div>
  );
};

export default Blog;
