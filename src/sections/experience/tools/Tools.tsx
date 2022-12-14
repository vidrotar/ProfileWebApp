import {AbilityRowInfo} from "../Experience";
import {Grid} from "@material-ui/core";
import AbilityRow from "../abilityRow/AbilityRow.tsx";

const intellIj: AbilityRowInfo = {
    skillName: "IntellIj",
    yearsOfExperience: 4
}

const WebStorm: AbilityRowInfo = {
    skillName: "Webstorm",
    yearsOfExperience: 2
}

const PhpStorm: AbilityRowInfo = {
    skillName: "PhpStorm",
    yearsOfExperience: 2
}

const Jira: AbilityRowInfo = {
    skillName: "Jira",
    yearsOfExperience: 4
}

const Confluence: AbilityRowInfo = {
    skillName: "Confluence",
    yearsOfExperience: 2
}

const git: AbilityRowInfo = {
    skillName: "Git",
    yearsOfExperience: 4
}

const GitHub: AbilityRowInfo = {
    skillName: "GitHub",
    yearsOfExperience: 3
}

const BitBucket: AbilityRowInfo = {
    skillName: "BitBucket",
    yearsOfExperience: 2
}

const ElasticStack: AbilityRowInfo = {
    skillName: "Elastic stack",
    yearsOfExperience: 2
}

const mainTools: AbilityRowInfo[] = [Jira, git, BitBucket, Confluence, GitHub];
const secondaryTools: AbilityRowInfo[] = [intellIj, WebStorm, PhpStorm];

function Tools() {
    return(
        <>
            <Grid md={12} xs={12} item className={"heading--2"}>
                <h3>Tools</h3>
            </Grid>
            <Grid md={6} xs={12} className={"skills--column"} item>
                <Grid container className={"first--row"}>
                    <Grid item>Tool</Grid>
                    <Grid item>Experience (Years)</Grid>
                </Grid>
                {
                    mainTools.map((skill, index) => {
                        return <AbilityRow skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience} key={index}></AbilityRow>
                    })
                }
            </Grid>
            <Grid md={6} xs={12} item>
                <Grid container className={"first--row"}>
                    <Grid item>Tool</Grid>
                    <Grid item>Experience (Years)</Grid>
                </Grid>
                {
                    secondaryTools.map((skill, index) => {
                        return <AbilityRow skillName={skill.skillName} yearsOfExperience={skill.yearsOfExperience} key={index}></AbilityRow>
                    })
                }
            </Grid>
        </>
    );
}

export default Tools;
