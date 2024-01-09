import React, { useEffect } from "react";
import { Layout } from "../Components/Layout/Layout";
import { SubNav } from "../Components/Navbar/SubNav";
import Banner from "../Components/HomeItems/Banner";
import { Midbar } from "../Components/HomeItems/Midbar";

export default function Home() {
  const mobile = "/Images/mobile.jpg";
  const laptop = "/Images/lapy.webp";
  const tablet = "/Images/tablet.jpg";
  const tv = "/Images/Moniter.jpg";
  const watch = "/Images/watch.jpg";
  const BannerImage = [mobile, laptop, tablet, tv, watch];

  return (
    <Layout>
      <SubNav />
      <Banner images={BannerImage} />
      <Midbar />
    </Layout>
  );
}
