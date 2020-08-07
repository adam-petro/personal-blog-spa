import React from "react";
import Feed from "../components/Feed";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <React.Fragment>
      <Banner />
      <Feed />
    </React.Fragment>
  );
}
