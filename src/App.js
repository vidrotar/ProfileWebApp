import './App.css';
import Profile from "./sections/profile/Profile.tsx";
import Education from "./sections/education/Education.tsx";
import Experience from "./sections/experience/Experience.tsx";
import Contact from "./sections/contact/Contact.tsx";
import Header from "./sections/header/Header.tsx";
import {ScrollingProvider} from "react-scroll-section";
import ReactGA from 'react-ga4';

const TRACKING_ID = "G-S2QGL3QDFR"; // YOUR_OWN_TRACKING_ID

function App() {
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send("pageview");


  return (
    <div className="App">
        <ScrollingProvider offset={-50}>
            <Header/>
            <Profile/>
            <Education/>
            <Experience/>
            <Contact/>
        </ScrollingProvider>
    </div>
  );
}

export default App;
