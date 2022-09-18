import {Grid} from "@material-ui/core";
import "./Experience.css";
import Skills from "./skills/Skills.tsx";
import Languages from "./languages/Languages.tsx";
import Tools from "./tools/Tools.tsx";
import {Section} from 'react-scroll-section';

export type AbilityRowInfo = {
  skillName: string;
  yearsOfExperience: number;
};

function Experience() {
    return(
        <Section id={'abilities'}>
            <div className={"container--experience"}>
                <Grid container className={"abilities--grid"}>
                    <Grid md={12} item>
                        <h2>Abilities</h2>
                        <p className={"short--title"}>What I've learned so far</p>
                    </Grid>
                    <Skills></Skills>
                    <Languages></Languages>
                    <Tools></Tools>
                </Grid>
            </div>
        </Section>
    );
}

export default Experience;