"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
require("./Experience.css");
var Skills_tsx_1 = require("./skills/Skills.tsx");
var Languages_tsx_1 = require("./languages/Languages.tsx");
var Tools_tsx_1 = require("./tools/Tools.tsx");
function Experience() {
    return (<div className={"container--experience"}>
            <core_1.Grid container className={"abilities--grid"}>
                <core_1.Grid md={12} item>
                    <h2>Abilities</h2>
                    <p className={"short--title"}>What I've learned so far</p>
                </core_1.Grid>
                <Skills_tsx_1.default></Skills_tsx_1.default>
                <Languages_tsx_1.default></Languages_tsx_1.default>
                <Tools_tsx_1.default></Tools_tsx_1.default>
            </core_1.Grid>
        </div>);
}
exports.default = Experience;
