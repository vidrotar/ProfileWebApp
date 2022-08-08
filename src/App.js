import './App.css';
import Profile from "./sections/profile/Profile.tsx";
import Education from "./sections/education/Education.tsx";
import Experience from "./sections/experience/Experience.tsx";

function App() {
  return (
    <div className="App">
        <Profile/>
        <Education/>
        <Experience/>
    </div>
  );
}

export default App;
