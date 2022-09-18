import {Grid} from '@material-ui/core';
import './Contact.css';
import {Envelope, LinkedinLogo} from "phosphor-react";
import {Section} from "react-scroll-section";

function Contact() {
    return (
        <Section id={'contact'}>
            <div className={'container--grey'}>
                <Grid container className={'contact--description'}>
                    <Grid md={12} xs={12} item>
                        <h2>Contact</h2>
                        <p className={"short--title"}>You can contact me via:</p>
                    </Grid>

                    <Grid container className={'contact--details'}>
                        <div className={'contact--item'}>
                            <div><LinkedinLogo size={32} weight="thin" /> </div>
                            <a href={'https://www.linkedin.com/in/vid-rotar'}>LinkedIn Profile</a>
                        </div>
                        <div className={'contact--item'}>
                            <div><Envelope size={32} weight="thin" /> </div>
                            <p>vidrotar@duck.com</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Section>
    );
}

export default Contact;
