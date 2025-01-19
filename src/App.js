import React from "react";
import Body from "./pages/body";
import About from "./pages/about_page"
import { Routes ,Route } from "react-router-dom";
import { NavBar } from "./components/navbar";
import { Footer } from "./components/footer";
import Committees from "./pages/committee";
import Cfp from "./pages/cfp";
import Research from "./components/calls/Research";
import Resource from "./components/calls/Resource";
import InUse from "./components/calls/InUse";
import Posters from "./components/calls/Posters";
import SemanticWeb from "./components/calls/SemanticWeb";
import IndustryTrack from "./components/calls/IndustryTrack";
import DoctoralConsortium from "./components/calls/DoctoralConsortium";
import HTMLSubmissionGuide from "./components/guidelines/HTMLSubmissionGuide";
import ReviewGuidelines from "./components/guidelines/ReviewGuidelines";
import SupplementalMaterials from "./components/guidelines/SupplementalMaterials";
import ResourcesAvailability from "./components/guidelines/ResourcesAvailability";
import Sponsorship from "./components/Sponsorship";
import ImportantDates from "./components/importantdates"
import WorkshopsTutorials from "./components/calls/WorkshopsTutorials";


export default function HeroComponent() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Body/>}/>
        {/* <Route path="/register" element={<Registration/>}/> */}
        <Route path="/about" element={<About/>} />
        <Route path="/organizing_committee" element={<Committees/>} />
        <Route path="/importantdates" element={<ImportantDates/>} />
        <Route path="/cfp" element={<Cfp/>} />
        {/* <Route path="/author-guide" element={<AuthorGuidelines/>}/> */}
        {/* <Route path="/contact" element={<Contact/>}/> */}
        {/* <Route path="/agenda" element ={<DeclareSoon/>} /> */}
        {/* <Route path="/participation-policy" element ={<DeclareSoon/>} /> */}


        {/* Calls */}
        <Route path="/calls/research" element={<Research />} />
        <Route path="/calls/resource" element={<Resource />} />
        <Route path="/calls/in-use" element={<InUse />} />
        <Route path="/calls/posters" element={<Posters />} />
        <Route path="/calls/semantic" element={<SemanticWeb />} />
        <Route path="/calls/industry" element={<IndustryTrack />} />
        <Route path="/calls/doctoral" element={<DoctoralConsortium />} />
        <Route path="/calls/workshopstutorials" element={<WorkshopsTutorials />} />

        {/* Guidelines */}
        <Route path="/guidelines/html-submission" element={<HTMLSubmissionGuide />} />
        <Route path="/guidelines/review" element={<ReviewGuidelines />} />
        <Route path="/guidelines/supplemental" element={<SupplementalMaterials />} />
        <Route path="/guidelines/resources" element={<ResourcesAvailability />} />

        {/* Sponsorship */}
        <Route path="/sponsorship" element={<Sponsorship />} />
      </Routes>
      <Footer/>
    </>
  );
}
