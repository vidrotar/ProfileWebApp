"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
require("./Contact.css");
var phosphor_react_1 = require("phosphor-react");
function Contact() {
    return (<div className={'container--grey'}>
            <core_1.Grid container className={'contact--description'}>
                <core_1.Grid md={12} xs={12} item>
                    <h2>Contact</h2>
                    <p className={"short--title"}>You can contact me via:</p>
                </core_1.Grid>

                <core_1.Grid md={12} xs={12} container className={'contact--details'}>
                    <div className={'contact--item'}>
                        <div><phosphor_react_1.LinkedinLogo size={32} weight="thin"/> </div>
                        <p>LinkToLinkedIN</p>
                    </div>
                    <div className={'contact--item'}>
                        <div><phosphor_react_1.Envelope size={32} weight="thin"/> </div>
                        <p>vidrotar@duck.com</p>
                    </div>
                </core_1.Grid>
            </core_1.Grid>
        </div>);
}
exports.default = Contact;
