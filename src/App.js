import React from "react";
import Body from "./pages/body";
import About from "./pages/about_page"
import { Routes ,Route } from "react-router-dom";
import { NavBar } from "./components/navbar";
import { Footer } from "./components/footer";
import Committees from "./pages/committee";
import Cfp from "./pages/cfp";

export default function HeroComponent() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Body/>}/>
        {/* <Route path="/register" element={<Registration/>}/> */}
        <Route path="/about" element={<About/>} />
        <Route path="/organizing_committee" element={<Committees/>} />
        <Route path="/cfp" element={<Cfp/>} />
        {/* <Route path="/author-guide" element={<AuthorGuidelines/>}/> */}
        {/* <Route path="/contact" element={<Contact/>}/> */}
        {/* <Route path="/agenda" element ={<DeclareSoon/>} /> */}
        {/* <Route path="/participation-policy" element ={<DeclareSoon/>} /> */}
      </Routes>
      <Footer/>
    </>
  );
}
