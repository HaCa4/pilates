import Image from "next/image";

import Navbar from "./Navbar";
import Meta from "./Meta";
import { NextComponentType, NextPage, NextPageContext } from "next";

export type LayoutProps = {
  children: NextComponentType<NextPageContext, any, {}>;
};

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Meta />
      <Navbar />
      <main style={{ maxHeight: "93vh", maxWidth: "100vw", position: "relative" }}>
        <Image
          alt="homepage"
          src={"/home.png"}
          layout="fill"
          objectFit="cover"
          quality={100}
          style={{ zIndex: "-10" }}
        />
        {props?.children}
      </main>
    </>
  );
};
export default Layout;
