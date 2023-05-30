import React, { useState, useEffect } from "react";
import Head from "next/head";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

import favicon from "../images/logojohndoe.png";
import HomeSection from "../components/HomeSection";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import CertificationSection from "../components/CertificationSection";
import Section4 from "../components/Section4";

export default function Home() {
  return (
    <div className="flex flex-col dark:bg-gray-900">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href={favicon} />
      </Head>

      <div className="flex flex-col dark:bg-gray-900">
        <Nav />
        <HomeSection />
        <EducationSection />
        <ExperienceSection />
        <CertificationSection />
        {/* <Section4 /> */}
        <Footer />
      </div>
    </div>
  );
}
