import React from "react";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

export default function ErrorPage() {
  return (
    <Layout>
      <h1>The resource you requested has not been found on this server</h1>
    </Layout>
  );
}
