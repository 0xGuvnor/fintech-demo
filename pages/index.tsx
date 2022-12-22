import type { NextPage } from "next";
import Billing from "../components/Billing";
import Business from "../components/Business";
import CardDeal from "../components/CardDeal";
import Clients from "../components/Clients";
import CTA from "../components/CTA";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <Layout title="Fintech App">
      <Hero />

      <div className="flex items-start justify-center px-6 sm:px-16">
        <div className="w-full lg:max-w-7xl">
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
