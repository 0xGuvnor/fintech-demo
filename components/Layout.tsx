import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  title: string;
}

const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
