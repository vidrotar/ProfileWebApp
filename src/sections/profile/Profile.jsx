"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
require("./Profile.css");
var updatedProfilePhoto_jpg_1 = require("../../images/updatedProfilePhoto.jpg");
var react_scroll_section_1 = require("react-scroll-section");
function Profile() {
    function calculateAge() {
        var today = new Date();
        var birthDate = new Date('1995-03-04');
        var ageInMilliseconds = today - birthDate;
        return Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    }
    return (<react_scroll_section_1.Section id={'profile'}>
            <div className={'container--profile'}>
                <core_1.Grid container className={'profile-description'}>
                    <core_1.Grid md={12} xs={12} item className={'profile--heading'}>
                        <h2>Vid Rotar</h2>
                        <p className={"short--title"}>I'm a creative full stack developer</p>
                    </core_1.Grid>

                    <core_1.Grid md={4} item className={'heading--2'}>
                        <h3>About me</h3>
                        <p>I am an fullstack developer. I love structure, order and I also stand for quality. I also like working in a team.</p>
                    </core_1.Grid>

                    <core_1.Grid md={4} xs={12} item>
                        <img className={'image'} src={updatedProfilePhoto_jpg_1.default}/>
                    </core_1.Grid>

                    <core_1.Grid md={4} xs={12} item className={'item-details'}>
                        <h3>Details</h3>
                        <p><strong>Name:</strong></p>
                        <p>Vid Rotar</p>
                        <p><strong>Age:</strong></p>
                        <p>{calculateAge()} years</p>
                        <p><strong>Location:</strong></p>
                        <p>Slovenia</p>
                    </core_1.Grid>
                </core_1.Grid>
            </div>
        </react_scroll_section_1.Section>);
}
exports.default = Profile;
