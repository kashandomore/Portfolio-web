import type { NextPage } from "next";
import Layout from "@/components/layouts/Layout";
import Banner from "~/components/Banner";
import Services from "~/components/Services";
import About from "~/components/About";
import Skills from "~/components/Skills";
import Projects from "~/components/Projects";
import Testimonials from "~/components/Testimonials";
import Contact from "~/components/Contact";

const Home: NextPage = () => {
  return (
    <Layout title="Home page">
      <Banner />
      <Services />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default Home;
