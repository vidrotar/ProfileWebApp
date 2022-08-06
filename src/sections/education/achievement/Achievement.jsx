"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
require("./Achievement.css");
function Achievement(props) {
    return (<core_1.Grid container className={'education--description'}>
                <core_1.Grid md={4} item className={'achievement--heading'}>
                    <h4>{props.course}</h4>
                    <p>{props.timeline}</p>
                </core_1.Grid>

                <core_1.Grid md={8} item className={'heading--2'}>
                    <h4>{props.institutionTitle}</h4>
                    <p className={"short--title"}>{props.courseDescription}</p>
                </core_1.Grid>

                <core_1.Grid md={4} item>
                </core_1.Grid>

                <core_1.Grid md={8} item className={"link"}>
                    <ion-icon name="link-outline"/>
                    <a href={props.link.pageLink} className={"link--text"}>{props.link.pageLink}</a>
                </core_1.Grid>
            </core_1.Grid>);
}
exports.default = Achievement;
