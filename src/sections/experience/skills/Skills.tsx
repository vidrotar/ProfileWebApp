import {Grid} from "@material-ui/core";
import AbilityRow from "../abilityRow/AbilityRow.tsx";
import {AbilityRowInfo} from "../Experience";

const springBoot: AbilityRowInfo = {
    skillName: "SpringBoot",
    yearsOfExperience: 2
}

const docker: AbilityRowInfo = {
    skillName: "Docker",
    yearsOfExperience: 2
}

const kubernetes: AbilityRowInfo = {
    skillName: "Kubernetes",
    yearsOfExperience: 2
}

const java: AbilityRowInfo = {
    skillName: "Java",
    yearsOfExperience: 4
}

const javascript: AbilityRowInfo = {
    skillName: "Javascript",
    yearsOfExperience: 2
}

const python: AbilityRowInfo = {
    skillName: "Python",
    yearsOfExperience: 1
}

const php: AbilityRowInfo = {
    skillName: "PHP",
    yearsOfExperience: 2
}

const htmlCss: AbilityRowInfo = {
    skillName: "HTML/CSS",
    yearsOfExperience: 2
}

const languageSkills: AbilityRowInfo[] = [java, php, javascript, htmlCss, python];
const backendSkills: AbilityRowInfo[] = [springBoot, docker, kubernetes];
const frontendSkills: AbilityRowInfo[] = [springBoot];
const developingKnowledge: AbilityRowInfo[] = [springBoot];

function Skills() {
    return(
        <>
            <Grid md={12} xs={12} item className={"heading--2"}>
                <h3>Skills</h3>
            </Grid>
            <Grid direction={"column"} md={6} xs={12} className={"skills--column"} item>
                <Grid container className={"first--row"}>
                    <Grid item>Language</Grid>
                    <Grid item>Experience (Years)</Grid>
                </Grid>
                {
                    languageSkills.map((skill) => {
                        return <AbilityRow skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience}></AbilityRow>
                    })
                }
            </Grid>
            <Grid md={6} xs={12} item>
                <Grid container className={"first--row"}>
                    <Grid item>Backend</Grid>
                    <Grid item>Experience (Years)</Grid>
                </Grid>
                {
                    backendSkills.map((skill) => {
                        return <AbilityRow skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience}></AbilityRow>
                    })
                }
            </Grid>
            <Grid direction={"column"} md={6} xs={12} className={"skills--column"} item>
                <Grid container className={"first--row"}>
                    <Grid item>Frontend</Grid>
                    <Grid item>Experience (Years)</Grid>
                </Grid>
                {
                    languageSkills.map((skill) => {
                        return <AbilityRow skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience}></AbilityRow>
                    })
                }
            </Grid>
            <Grid md={6} xs={12} item>
                <Grid container className={"first--row"}>
                    <Grid item>Developing knowledge</Grid>
                    <Grid item>Experience (Years)</Grid>
                </Grid>
                {
                    backendSkills.map((skill) => {
                        return <AbilityRow skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience}></AbilityRow>
                    })
                }
            </Grid>
        </>
    );
}

export default Skills;
