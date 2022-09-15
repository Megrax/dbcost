import type { NextPage } from "next";
import Head from "next/head";
import MainLayout from "@/layouts/main";
import { union } from "lodash";

const Home: NextPage = () => {
  console.log(union([1, 2, 3], [2, 3, 4, 5, 1, 2]));
  return (
    <MainLayout title="The Ultimate AWS RDS and Google Cloud SQL Instance Pricing Sheet">
      <Head>
        <title>DB Cost | RDS & Cloud SQL Instance Pricing Sheet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </MainLayout>
  );
};

export default Home;
