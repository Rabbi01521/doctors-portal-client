import React from "react";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import BannerFooter from "../BannerFooter/BannerFooter";
import ContactUs from "../ContactUs/ContactUs";
import ExceptionalDental from "../ExceptionalDental/ExceptionalDental";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <Navigation></Navigation>
      <Banner />
      <BannerFooter />
      <ExceptionalDental />
      <Services></Services>
      <AppointmentBanner></AppointmentBanner>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
