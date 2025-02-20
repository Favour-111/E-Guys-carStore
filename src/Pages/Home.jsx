import React from "react";
import BreadCrumb from "../Components/BreadCrumbs/BreadCrumb";
import Nav from "../Components/Nav/Nav";
import FixedBackground from "../Components/FixedBackground/FixedBackground";
import Category from "../Components/Category/Category";
import CarFilter from "../Components/CarFilter/CarFilter";
import Info from "../Components/Info/Info";
import NewProduct from "../Components/NewProduct/NewProduct";
import Blog from "../Components/Blog/Blog";
import BackToTop from "../Components/BackToTop/BackToTop";
import "./Home.css";
// import Special from "../Components/Special/Special";
import RecentCar from "../Components/RecentCar/RecentCar";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  return (
    <div className="body">
      <BreadCrumb />
      <Nav />
      <FixedBackground />
      <CarFilter />
      <Category />
      <NewProduct />
      {/* <Special /> */}
      <RecentCar />
      <Info />
      <Blog />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Home;
