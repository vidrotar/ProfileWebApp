import './App.css';
import Profile from "./sections/profile/Profile.tsx";
import Education from "./sections/education/Education.tsx";
import Experience from "./sections/experience/Experience.tsx";
import Contact from "./sections/contact/Contact.tsx";
import Header from "./sections/header/Header.tsx";
import {ScrollingProvider} from "react-scroll-section";

function App() {
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
