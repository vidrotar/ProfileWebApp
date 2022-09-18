import {Grid} from "@material-ui/core";
import './Header.css';
import {useScrollSection} from "react-scroll-section";

function Header() {
    const profileSection = useScrollSection('profile');
    const experienceSection = useScrollSection('experience');
    const abilitiesSection = useScrollSection('abilities');
    const contactSection = useScrollSection('contact');

    return (
        <Grid container className={'header'}>
            <Grid item className={'header--item'} onClick={profileSection.onClick}>Profile</Grid>
            <Grid item className={'header--item'} onClick={experienceSection.onClick}>Experience</Grid>
            <Grid item className={'header--item'} onClick={abilitiesSection.onClick}>Abilities</Grid>
            <Grid item className={'header--item'} onClick={contactSection.onClick}>Contact</Grid>
        </Grid>
    );
}

export default Header;
