import './App.css';
import Profile from "./sections/profile/Profile.tsx";
import Education from "./sections/education/Education.tsx";
import Experience from "./sections/experience/Experience.tsx";
import Contact from "./sections/contact/Contact.tsx";

function App() {
  return (
    <div className="App">
        <Profile/>
        <Education/>
        <Experience/>
        <Contact/>
    </div>
  );
}

export default App;
