/* ABOUT PAGE */
export type instructorProps = {
  content: {
    image: string;
    name: string;
    title: string;
    text: string;
  };
  styles: {
    readonly [key: string]: string;
  };
};
export type Expert = {
  name: string;
  title: string;
  text: string;
  image: string;
};

/* HOME PAGE */
export type Box = {
  title: string;
  subtext: string;
  link: string;
};
export type homeCardProps = {
  content: {
    title: string;
    subtext: string;
    link: string;
  };
  styles: {
    readonly [key: string]: string;
  };
};
/* TRAINING PAGE */
export type Training = {
  image: string;
  title: string;
  text: string;
};
/* NUTRITION PAGE */
export type Nutrition = {
  image: string;
  title: string;
  text: string;
};
/* BLOG PAGE */
export type Blog = {
  image: string;
  title: string;
  text: string;
};
/* SUBPAGES */
export type PropsOfSubpages = {
  content: Blog;
};
/* CONTACT PAGE */
export type formProps = {
  styles: {
    readonly [key: string]: string;
  };
};
/* REUSED COMPONENT */
export type InfoCardProps = {
  content: {
    image: string;
    title: string;
    text: string;
  };
};
