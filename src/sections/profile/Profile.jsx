"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
require("./Profile.css");
var profilePhoto_jpg_1 = require("../../images/profilePhoto.jpg");
function Profile() {
    return (<div className={'container--profile'}>
            <core_1.Grid container className={'profile-description'}>
                <core_1.Grid md={12} item className={'profile--heading'}>
                    <h2>Vid Rotar</h2>
                    <p className={"short--title"}>I'm a creative full stack developer</p>
                </core_1.Grid>

                <core_1.Grid md={4} item className={'heading--2'}>
                    <h3>About me</h3>
                    <p>I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.</p>
                </core_1.Grid>

                <core_1.Grid md={4} item>
                    <img className={'image'} src={profilePhoto_jpg_1.default}/>
                </core_1.Grid>

                <core_1.Grid md={4} item className={'item-details'}>
                    <h3>Details</h3>
                    <p><strong>Name:</strong></p>
                    <p>Vid Rotar</p>
                    <p><strong>Age:</strong></p>
                    <p>27 years</p>
                    <p><strong>Location:</strong></p>
                    <p>Slovenia</p>
                </core_1.Grid>

                <core_1.Grid item md={12}>
                    Want to know more about me? Check out content below.
                </core_1.Grid>
            </core_1.Grid>
        </div>);
}
exports.default = Profile;