"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var AbilityRow_tsx_1 = require("../abilityRow/AbilityRow.tsx");
var springBoot = {
    skillName: "SpringBoot",
    yearsOfExperience: 2
};
var docker = {
    skillName: "Docker",
    yearsOfExperience: 2
};
var kubernetes = {
    skillName: "Kubernetes",
    yearsOfExperience: 2
};
var java = {
    skillName: "Java",
    yearsOfExperience: 4
};
var javascript = {
    skillName: "Javascript",
    yearsOfExperience: 2
};
var python = {
    skillName: "Python",
    yearsOfExperience: 1
};
var php = {
    skillName: "PHP",
    yearsOfExperience: 2
};
var htmlCss = {
    skillName: "HTML/CSS",
    yearsOfExperience: 2
};
var languageSkills = [java, php, javascript, htmlCss, python];
var backendSkills = [springBoot, docker, kubernetes];
var frontendSkills = [springBoot];
var developingKnowledge = [springBoot];
function Skills() {
    return (<>
            <core_1.Grid md={12} item className={"heading--2"}>
                <h3>Skills</h3>
            </core_1.Grid>
            <core_1.Grid direction={"column"} md={6} className={"skills--column"} item>
                <core_1.Grid container className={"first--row"}>
                    <core_1.Grid item>Language</core_1.Grid>
                    <core_1.Grid item>Experience (Years)</core_1.Grid>
                </core_1.Grid>
                {languageSkills.map(function (skill) {
            return <AbilityRow_tsx_1.default skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience}></AbilityRow_tsx_1.default>;
        })}
            </core_1.Grid>
            <core_1.Grid md={6} item>
                <core_1.Grid container className={"first--row"}>
                    <core_1.Grid item>Backend</core_1.Grid>
                    <core_1.Grid item>Experience (Years)</core_1.Grid>
                </core_1.Grid>
                {backendSkills.map(function (skill) {
            return <AbilityRow_tsx_1.default skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience}></AbilityRow_tsx_1.default>;
        })}
            </core_1.Grid>
            <core_1.Grid direction={"column"} md={6} className={"skills--column"} item>
                <core_1.Grid container className={"first--row"}>
                    <core_1.Grid item>Frontend</core_1.Grid>
                    <core_1.Grid item>Experience (Years)</core_1.Grid>
                </core_1.Grid>
                {languageSkills.map(function (skill) {
            return <AbilityRow_tsx_1.default skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience}></AbilityRow_tsx_1.default>;
        })}
            </core_1.Grid>
            <core_1.Grid md={6} item>
                <core_1.Grid container className={"first--row"}>
                    <core_1.Grid item>Developing knowledge</core_1.Grid>
                    <core_1.Grid item>Experience (Years)</core_1.Grid>
                </core_1.Grid>
                {backendSkills.map(function (skill) {
            return <AbilityRow_tsx_1.default skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience}></AbilityRow_tsx_1.default>;
        })}
            </core_1.Grid>
        </>);
}
exports.default = Skills;
