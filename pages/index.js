import React from "react";
import Home from "../components/Home";

const Index = () => {
  return <Home />;
};
export default Index;
export async function getStaticProps() {
  return {
    props: {},
  };
}