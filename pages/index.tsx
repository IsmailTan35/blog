import type { NextPage } from "next";
import Head from "next/head";
import V1 from "../v1";

const description =
  "İsmail Tan is a full stack developer building web applications with React, TypeScript and Node.js.";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>İsmail Tan · Full Stack Developer</title>
        <meta name="description" content={description} />
        <meta property="og:title" content="İsmail Tan · Full Stack Developer" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Head>
      <V1 />
    </>
  );
};

export default Home;
