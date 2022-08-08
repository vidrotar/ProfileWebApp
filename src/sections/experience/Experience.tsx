import {Grid, Icon} from "@material-ui/core";
import "./Experience.css";
import SkillRow from "./skillRow/SkillRow.tsx";

export type SkillRowInfo = {
  skillName: string;
  yearsOfExperience: number;
};

const springBoot: SkillRowInfo = {
    skillName: "SpringBoot",
    yearsOfExperience: 4
}

const docker: SkillRowInfo = {
    skillName: "Docker",
    yearsOfExperience: 3
}

const kubernetes: SkillRowInfo = {
    skillName: "Kubernetes",
    yearsOfExperience: 2
}

const java: SkillRowInfo = {
    skillName: "Java",
    yearsOfExperience: 5
}

const javascript: SkillRowInfo = {
    skillName: "Javascript",
    yearsOfExperience: 3
}

const python: SkillRowInfo = {
    skillName: "Python",
    yearsOfExperience: 2
}

const php: SkillRowInfo = {
    skillName: "PHP",
    yearsOfExperience: 3
}

const htmlCss: SkillRowInfo = {
    skillName: "HTML/CSS",
    yearsOfExperience: 2
}

const languageSkills: SkillRowInfo[] = [java, javascript, python, php, htmlCss];
const backendSkills: SkillRowInfo[] = [springBoot, docker, kubernetes];
const frontendSkills: SkillRowInfo[] = [springBoot];
const developingKnowledge: SkillRowInfo[] = [springBoot];

function Experience() {

    return(
        <div className={"container--experience"}>
            <Grid container className={"abilities--grid"}>
                <Grid md={12} item>
                    <h2>Abilities</h2>
                    <p className={"short--title"}>What I've learned so far</p>
                </Grid>

                <Grid md={12} item className={"heading--2"}>
                    <h3>Skills</h3>
                </Grid>
                <Grid direction={"column"} md={6} className={"skills--column"} item>
                    <Grid container className={"first--row"}>
                        <Grid item>Language</Grid>
                        <Grid item>Experience (Years)</Grid>
                    </Grid>
                    {
                        languageSkills.map((skill) => {
                            return <SkillRow skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience}></SkillRow>
                        })
                    }
                </Grid>
                <Grid md={6} item>
                    <Grid container className={"first--row"}>
                        <Grid item>Backend</Grid>
                        <Grid item>Experience (Years)</Grid>
                    </Grid>
                    {
                        backendSkills.map((skill) => {
                            return <SkillRow skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience}></SkillRow>
                        })
                    }
                </Grid>
                <Grid direction={"column"} md={6} className={"skills--column"} item>
                    <Grid container className={"first--row"}>
                        <Grid item>Frontend</Grid>
                        <Grid item>Experience (Years)</Grid>
                    </Grid>
                    {
                        languageSkills.map((skill) => {
                            return <SkillRow skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience}></SkillRow>
                        })
                    }
                </Grid>
                <Grid md={6} item>
                    <Grid container className={"first--row"}>
                        <Grid item>Developing knowledge</Grid>
                        <Grid item>Experience (Years)</Grid>
                    </Grid>
                    {
                        backendSkills.map((skill) => {
                            return <SkillRow skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience}></SkillRow>
                        })
                    }
                </Grid>
            </Grid>
        </div>
    );
}

export default Experience;