import React from "react";
import { redirect } from "next/navigation";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      permanent: false,
      destination: "/earn/farms",
    },
  };
};

export default async function index() {
  return <div>index</div>;
}
