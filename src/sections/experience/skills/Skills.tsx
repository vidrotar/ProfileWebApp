import {Grid} from "@material-ui/core";
import AbilityRow from '../abilityRow/AbilityRow.tsx';
import {AbilityRowInfo} from '../Experience';

const springBoot: AbilityRowInfo = {
    skillName: "SpringBoot",
    yearsOfExperience: 4
}

const symfony: AbilityRowInfo = {
    skillName: "Symfony",
    yearsOfExperience: 1
}

const docker: AbilityRowInfo = {
    skillName: "Docker",
    yearsOfExperience: 4
}

const kubernetes: AbilityRowInfo = {
    skillName: "Kubernetes",
    yearsOfExperience: 3
}

const kafka: AbilityRowInfo = {
    skillName: "Kafka",
    yearsOfExperience: 3
}

const kibana: AbilityRowInfo = {
    skillName: "Kibana",
    yearsOfExperience: 3
}

const prometheus: AbilityRowInfo = {
    skillName: "Prometheus",
    yearsOfExperience: 1
}

const grafana: AbilityRowInfo = {
    skillName: "Grafana",
    yearsOfExperience: 1
}

const java: AbilityRowInfo = {
    skillName: "Java",
    yearsOfExperience: 5
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

const react: AbilityRowInfo = {
    skillName: "React",
    yearsOfExperience: 2
}

const typescript: AbilityRowInfo = {
    skillName: "Typescript",
    yearsOfExperience: 2
}

const jquery: AbilityRowInfo = {
    skillName: "Jquery",
    yearsOfExperience: 1
}

// developing knowledge
const agile: AbilityRowInfo = {
    skillName: "Agile",
    yearsOfExperience: 4
}

const scrum: AbilityRowInfo = {
    skillName: "Scrum",
    yearsOfExperience: 5
}

const continuousIntegration: AbilityRowInfo = {
    skillName: "Continuous Integration",
    yearsOfExperience: 4
}

const versionControl: AbilityRowInfo = {
    skillName: "Version Control",
    yearsOfExperience: 3
}

const languageSkills: AbilityRowInfo[] = [java, php, javascript, htmlCss, python];
const backendSkills: AbilityRowInfo[] = [springBoot, docker, kubernetes, kafka, kibana, grafana, prometheus, symfony];
const frontendSkills: AbilityRowInfo[] = [react, typescript, jquery];
const developingKnowledge: AbilityRowInfo[] = [agile, scrum, continuousIntegration, versionControl];

function Skills() {
    return(
        <>
                <Grid md={12} xs={12} item className={"heading--2"}>
                    <h3>Skills</h3>
                </Grid>
                <Grid md={6} xs={12} className={"skills--column"} item>
                    <Grid container className={"first--row"}>
                        <Grid item>Language</Grid>
                        <Grid item>Experience (Years)</Grid>
                    </Grid>
                    {
                        languageSkills.map((skill, index) => {
                            return <AbilityRow skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience} key={index}></AbilityRow>
                        })
                    }
                </Grid>
                <Grid md={6} xs={12} item>
                    <Grid container className={"first--row"}>
                        <Grid item>Backend</Grid>
                        <Grid item>Experience (Years)</Grid>
                    </Grid>
                    {
                        backendSkills.map((skill, index) => {
                            return <AbilityRow skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience} key={index}></AbilityRow>
                        })
                    }
                </Grid>
                <Grid md={6} xs={12} className={"skills--column"} item>
                    <Grid container className={"first--row"}>
                        <Grid item>Frontend</Grid>
                        <Grid item>Experience (Years)</Grid>
                    </Grid>
                    {
                        frontendSkills.map((skill, index) => {
                            return <AbilityRow skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience} key={index}></AbilityRow>
                        })
                    }
                </Grid>
                <Grid md={6} xs={12} item>
                    <Grid container className={"first--row"}>
                        <Grid item>Developing knowledge</Grid>
                        <Grid item>Experience (Years)</Grid>
                    </Grid>
                    {
                        developingKnowledge.map((skill, index) => {
                            return <AbilityRow skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience} key={index}></AbilityRow>
                        })
                    }
                </Grid>

        </>
    );
}

export default Skills;
