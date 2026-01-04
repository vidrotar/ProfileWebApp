import './App.css';
import Profile from "./sections/profile/Profile.tsx";
import Education from "./sections/education/Education.tsx";
import Experience from "./sections/experience/Experience.tsx";
import Contact from "./sections/contact/Contact.tsx";
import Header from "./sections/header/Header.tsx";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import ReactGA from 'react-ga4';

const TRACKING_ID = "G-S2QGL3QDFR"; // YOUR_OWN_TRACKING_ID

function App() {
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send("pageview");


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <Profile />
        <Education />
        <Experience />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
