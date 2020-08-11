import React from "react";
import Feed from "../components/Feed";
import Banner from "../components/Banner";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout headerProps={{ position: "absolute" }}>
      <Banner />
      <Feed />
    </Layout>
  );
}
