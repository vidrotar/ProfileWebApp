"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
require("./Achievement.css");
function Achievement(props) {
    return (<core_1.Grid container className={'contact--description'}>
                <core_1.Grid md={4} item className={'achievement--heading'}>
                    <h4>{props.course}</h4>
                    <p>{props.timeline}</p>
                </core_1.Grid>

                <core_1.Grid md={8} item className={'heading--2'}>
                    <h4>{props.institutionTitle}</h4>
                    {props.finishPiece && (<p className={"short--title"}>{props.finishPiece}</p>)}
                    <p className={"short--title"}>{props.courseDescription}</p>
                </core_1.Grid>

                <core_1.Grid md={4} item>
                </core_1.Grid>

                <core_1.Grid md={8} item className={"link"}>
                    <ion-icon name="link-outline"/>
                    <core_1.Link underline="hover" href={props.link.pageLink}>{props.link.pageLink}</core_1.Link>
                </core_1.Grid>
            </core_1.Grid>);
}
exports.default = Achievement;
