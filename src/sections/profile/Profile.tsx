import {Grid} from '@material-ui/core';
import './Profile.css';
import ProfilePicture from '../../images/updatedProfilePhoto.jpg';
import {Section} from "react-scroll-section";

function Profile() {
    function calculateAge() {
        var today = new Date();
        var birthDate = new Date('1995-03-04');

        let ageInMilliseconds = today - birthDate;
        return Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    }

    return (
        <Section id={'profile'}>
            <div className={'container--profile'}>
                <Grid container className={'profile-description'}>
                    <Grid md={12} xs={12} item className={'profile--heading'}>
                        <h2>Vid Rotar</h2>
                        <p className={"short--title"}>I'm a creative full stack developer</p>
                    </Grid>

                    <Grid md={4} item className={'heading--2'}>
                        <h3>About me</h3>
                        <p>I am a fullstack developer. I love structure, order and I also stand for quality. I also like working in a team.</p>
                    </Grid>

                    <Grid md={4} xs={12} item>
                        <img className={'image'} src={ProfilePicture}/>
                    </Grid>

                    <Grid md={4} xs={12} item className={'item-details'}>
                        <h3>Details</h3>
                        <p><strong>Name:</strong></p>
                        <p>Vid Rotar</p>
                        <p><strong>Age:</strong></p>
                        <p>{calculateAge()} years</p>
                        <p><strong>Location:</strong></p>
                        <p>Slovenia</p>
                    </Grid>
                </Grid>
            </div>
        </Section>
    );
}

export default Profile;
