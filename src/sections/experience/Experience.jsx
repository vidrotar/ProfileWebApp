"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
require("./Experience.css");
var SkillRow_tsx_1 = require("./skillRow/SkillRow.tsx");
var springBoot = {
    skillName: "SpringBoot",
    yearsOfExperience: 4
};
var docker = {
    skillName: "Docker",
    yearsOfExperience: 3
};
var kubernetes = {
    skillName: "Kubernetes",
    yearsOfExperience: 2
};
var java = {
    skillName: "Java",
    yearsOfExperience: 5
};
var javascript = {
    skillName: "Javascript",
    yearsOfExperience: 3
};
var python = {
    skillName: "Python",
    yearsOfExperience: 2
};
var php = {
    skillName: "PHP",
    yearsOfExperience: 3
};
var htmlCss = {
    skillName: "HTML/CSS",
    yearsOfExperience: 2
};
var languageSkills = [java, javascript, python, php, htmlCss];
var backendSkills = [springBoot, docker, kubernetes];
var frontendSkills = [springBoot];
var developingKnowledge = [springBoot];
function Experience() {
    return (<div className={"container--experience"}>
            <core_1.Grid container className={"abilities--grid"}>
                <core_1.Grid md={12} item>
                    <h2>Abilities</h2>
                    <p className={"short--title"}>What I've learned so far</p>
                </core_1.Grid>

                <core_1.Grid md={12} item className={"heading--2"}>
                    <h3>Skills</h3>
                </core_1.Grid>
                <core_1.Grid direction={"column"} md={6} className={"skills--column"} item>
                    <core_1.Grid container className={"first--row"}>
                        <core_1.Grid item>Language</core_1.Grid>
                        <core_1.Grid item>Experience (Years)</core_1.Grid>
                    </core_1.Grid>
                    {languageSkills.map(function (skill) {
            return <SkillRow_tsx_1.default skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience}></SkillRow_tsx_1.default>;
        })}
                </core_1.Grid>
                <core_1.Grid md={6} item>
                    <core_1.Grid container className={"first--row"}>
                        <core_1.Grid item>Backend</core_1.Grid>
                        <core_1.Grid item>Experience (Years)</core_1.Grid>
                    </core_1.Grid>
                    {backendSkills.map(function (skill) {
            return <SkillRow_tsx_1.default skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience}></SkillRow_tsx_1.default>;
        })}
                </core_1.Grid>
                <core_1.Grid direction={"column"} md={6} className={"skills--column"} item>
                    <core_1.Grid container className={"first--row"}>
                        <core_1.Grid item>Frontend</core_1.Grid>
                        <core_1.Grid item>Experience (Years)</core_1.Grid>
                    </core_1.Grid>
                    {languageSkills.map(function (skill) {
            return <SkillRow_tsx_1.default skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience}></SkillRow_tsx_1.default>;
        })}
                </core_1.Grid>
                <core_1.Grid md={6} item>
                    <core_1.Grid container className={"first--row"}>
                        <core_1.Grid item>Developing knowledge</core_1.Grid>
                        <core_1.Grid item>Experience (Years)</core_1.Grid>
                    </core_1.Grid>
                    {backendSkills.map(function (skill) {
            return <SkillRow_tsx_1.default skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience}></SkillRow_tsx_1.default>;
        })}
                </core_1.Grid>
            </core_1.Grid>
        </div>);
}
exports.default = Experience;
