"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var AbilityRow_tsx_1 = require("../abilityRow/AbilityRow.tsx");
var springBoot = {
    skillName: "SpringBoot",
    yearsOfExperience: 3
};
var symfony = {
    skillName: "Symfony",
    yearsOfExperience: 1
};
var docker = {
    skillName: "Docker",
    yearsOfExperience: 2
};
var kubernetes = {
    skillName: "Kubernetes",
    yearsOfExperience: 2
};
var kibana = {
    skillName: "Kibana",
    yearsOfExperience: 3
};
var prometheus = {
    skillName: "Prometheus",
    yearsOfExperience: 1
};
var grafana = {
    skillName: "Grafana",
    yearsOfExperience: 1
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
var react = {
    skillName: "React",
    yearsOfExperience: 2
};
var typescript = {
    skillName: "Typescript",
    yearsOfExperience: 2
};
var jquery = {
    skillName: "Jquery",
    yearsOfExperience: 1
};
// developing knowledge
var agile = {
    skillName: "Agile",
    yearsOfExperience: 4
};
var scrum = {
    skillName: "Scrum",
    yearsOfExperience: 4
};
var continuousIntegration = {
    skillName: "Continuous Integration",
    yearsOfExperience: 3
};
var versionControl = {
    skillName: "Version Control",
    yearsOfExperience: 3
};
var languageSkills = [java, php, javascript, htmlCss, python];
var backendSkills = [springBoot, docker, kubernetes, kibana, grafana, prometheus, symfony];
var frontendSkills = [react, typescript, jquery];
var developingKnowledge = [agile, scrum, continuousIntegration, versionControl];
function Skills() {
    return (<>
                <core_1.Grid md={12} xs={12} item className={"heading--2"}>
                    <h3>Skills</h3>
                </core_1.Grid>
                <core_1.Grid md={6} xs={12} className={"skills--column"} item>
                    <core_1.Grid container className={"first--row"}>
                        <core_1.Grid item>Language</core_1.Grid>
                        <core_1.Grid item>Experience (Years)</core_1.Grid>
                    </core_1.Grid>
                    {languageSkills.map(function (skill, index) {
            return <AbilityRow_tsx_1.default skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience} key={index}></AbilityRow_tsx_1.default>;
        })}
                </core_1.Grid>
                <core_1.Grid md={6} xs={12} item>
                    <core_1.Grid container className={"first--row"}>
                        <core_1.Grid item>Backend</core_1.Grid>
                        <core_1.Grid item>Experience (Years)</core_1.Grid>
                    </core_1.Grid>
                    {backendSkills.map(function (skill, index) {
            return <AbilityRow_tsx_1.default skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience} key={index}></AbilityRow_tsx_1.default>;
        })}
                </core_1.Grid>
                <core_1.Grid md={6} xs={12} className={"skills--column"} item>
                    <core_1.Grid container className={"first--row"}>
                        <core_1.Grid item>Frontend</core_1.Grid>
                        <core_1.Grid item>Experience (Years)</core_1.Grid>
                    </core_1.Grid>
                    {frontendSkills.map(function (skill, index) {
            return <AbilityRow_tsx_1.default skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience} key={index}></AbilityRow_tsx_1.default>;
        })}
                </core_1.Grid>
                <core_1.Grid md={6} xs={12} item>
                    <core_1.Grid container className={"first--row"}>
                        <core_1.Grid item>Developing knowledge</core_1.Grid>
                        <core_1.Grid item>Experience (Years)</core_1.Grid>
                    </core_1.Grid>
                    {developingKnowledge.map(function (skill, index) {
            return <AbilityRow_tsx_1.default skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience} key={index}></AbilityRow_tsx_1.default>;
        })}
                </core_1.Grid>

        </>);
}
exports.default = Skills;
