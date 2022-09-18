"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var AbilityRow_tsx_1 = require("../abilityRow/AbilityRow.tsx");
var intellIj = {
    skillName: "IntellIj",
    yearsOfExperience: 4
};
var WebStorm = {
    skillName: "Webstorm",
    yearsOfExperience: 2
};
var PhpStorm = {
    skillName: "PhpStorm",
    yearsOfExperience: 2
};
var Jira = {
    skillName: "Jira",
    yearsOfExperience: 4
};
var Confluence = {
    skillName: "Confluence",
    yearsOfExperience: 2
};
var git = {
    skillName: "Git",
    yearsOfExperience: 4
};
var GitHub = {
    skillName: "GitHub",
    yearsOfExperience: 3
};
var BitBucket = {
    skillName: "BitBucket",
    yearsOfExperience: 2
};
var ElasticStack = {
    skillName: "Elastic stack",
    yearsOfExperience: 2
};
var mainTools = [Jira, git, BitBucket, Confluence, GitHub];
var secondaryTools = [intellIj, WebStorm, PhpStorm];
function Tools() {
    return (<>
            <core_1.Grid md={12} xs={12} item className={"heading--2"}>
                <h3>Tools</h3>
            </core_1.Grid>
            <core_1.Grid md={6} xs={12} className={"skills--column"} item>
                <core_1.Grid container className={"first--row"}>
                    <core_1.Grid item>Tool</core_1.Grid>
                    <core_1.Grid item>Experience (Years)</core_1.Grid>
                </core_1.Grid>
                {mainTools.map(function (skill, index) {
            return <AbilityRow_tsx_1.default skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience} key={index}></AbilityRow_tsx_1.default>;
        })}
            </core_1.Grid>
            <core_1.Grid md={6} xs={12} item>
                <core_1.Grid container className={"first--row"}>
                    <core_1.Grid item>Tool</core_1.Grid>
                    <core_1.Grid item>Experience (Years)</core_1.Grid>
                </core_1.Grid>
                {secondaryTools.map(function (skill, index) {
            return <AbilityRow_tsx_1.default skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience} key={index}></AbilityRow_tsx_1.default>;
        })}
            </core_1.Grid>
        </>);
}
exports.default = Tools;
