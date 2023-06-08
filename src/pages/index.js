import React, { useState, useEffect } from "react";
import Head from "next/head";

import Footer from "../components/website/Footer";
import Nav from "../components/website/Nav";

import favicon from "../images/logojohndoe.png";
import HomeSection from "../components/home/HomeSection";
import EducationSection from "../components/education/EducationSection";
import ExperienceSection from "../components/experience/ExperienceSection";
import CertificationSection from "../components/certification/CertificationSection";
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
        <ExperienceSection />
        <CertificationSection />
        <EducationSection />
        {/* <Section4 /> */}
        <Footer />
      </div>
    </div>
  );
}
