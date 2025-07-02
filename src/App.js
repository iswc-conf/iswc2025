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
import JournalTrack from "./components/calls/JournalTrack";
import Posters from "./components/calls/Posters";
import Challenges from "./components/calls/Challenges";
import IndustryTrack from "./components/calls/IndustryTrack";
import DoctoralConsortium from "./components/calls/DoctoralConsortium";
import HTMLSubmissionGuide from "./components/guidelines/HTMLSubmissionGuide";
import PriorPublicationMultipleSubmission from "./components/guidelines/PriorPublicationMultipleSubmission";
import ReviewGuidelines from "./components/guidelines/ReviewGuidelines";
import SupplementalMaterials from "./components/guidelines/SupplementalMaterials";
import ResourcesAvailability from "./components/guidelines/ResourcesAvailability";
import SponsorshipPackages from "./components/sponsorship/SponsorshipPackages";
import Sponsors from "./components/sponsorship/Sponsors";
import ImportantDates from "./components/importantdates"
import WorkshopsCall from "./components/calls/WorkshopsCall";
import Tutorials from "./components/calls/Tutorials";
import Dagstuhl from "./components/calls/Dagstuhl";
import Host from "./components/blogs/host"
import NatureNavigator from "./components/blogs/NatureNavigator"
import Community from "./components/blogs/Community";
import { Visa } from "./components/attending/visa";
import { StudentGrants } from "./components/attending/StudentGrants";
import KeynoteSpeakers from "./components/program/KeynoteSpeakers";
import Panel from "./components/program/Panel";
import Workshops from "./components/program/Workshops";
import ProgramChallenges from "./components/program/ProgramChallenges";
import CodeOfConduct from "./components/attending/CodeOfConduct";
import { VenueAndAccomodation } from "./components/attending/venue_and_accomodation";
import Registration from "./components/attending/Registration";
import { SwsaDistinguishedDissertationAward } from "./components/calls/SwsaDistinguishedDissertationAward";


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
        <Route path="/calls/journaltrack" element={<JournalTrack />} />
        <Route path="/calls/posters" element={<Posters />} />
        <Route path="/calls/challenges" element={<Challenges />} />
        <Route path="/calls/industry" element={<IndustryTrack />} />
        <Route path="/calls/doctoral" element={<DoctoralConsortium />} />
        <Route path="/calls/workshops" element={<WorkshopsCall />} />
        <Route path="/calls/tutorials" element={<Tutorials />} />
        <Route path="/calls/dagstuhl" element={<Dagstuhl />} />
        <Route path="/calls/swsa" element={<SwsaDistinguishedDissertationAward />} />

        {/* Guidelines */}
        <Route path="/guidelines/html-submission" element={<HTMLSubmissionGuide />} />
        <Route path="/guidelines/review" element={<ReviewGuidelines />} />
        <Route path="/guidelines/supplemental" element={<SupplementalMaterials />} />
        <Route path="/guidelines/resources" element={<ResourcesAvailability />} />
        <Route path="/guidelines/prior-publications" element={<PriorPublicationMultipleSubmission />} />

        {/* Program */}
        <Route path="/program/keynotespeakers" element={<KeynoteSpeakers />} />
        <Route path="/program/workshops" element={<Workshops />} />
        <Route path="/program/challenges" element={<ProgramChallenges />} />
        <Route path="/program/panel" element={<Panel />} />

        {/* Attendings */}
        <Route path="/attending/visa" element={<Visa />} />
        <Route path="/attending/studentgrants" element= { <StudentGrants /> } />
        <Route path="/attending/codeofconduct" element={<CodeOfConduct />} />
        <Route path="/atttending/venueandaccomodation" element={<VenueAndAccomodation />} />
        <Route path="/atttending/registration" element={<Registration />} />

        {/* Blogs */}
        <Route path="/blogs/host" element={<Host />} />
        <Route path="/blogs/naturenavigator" element={<NatureNavigator />} />
        <Route path="/blogs/community" element={<Community />} />
        

        {/* Sponsorship */}
        <Route path="/sponsorship/sponsorshippackages" element={<SponsorshipPackages />} />
        <Route path="/sponsorship/sponsors" element={<Sponsors />} />
      </Routes>
      <Footer/>
    </>
  );
}
