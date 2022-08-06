import {Grid} from '@material-ui/core';
import {AchievementDetails} from "../Education";
import "./Achievement.css";

function Achievement(props: AchievementDetails) {
    return (
            <Grid container className={'education--description'}>
                <Grid md={4} item className={'achievement--heading'}>
                    <h4>{props.course}</h4>
                    <p>{props.timeline}</p>
                </Grid>

                <Grid md={8} item className={'heading--2'}>
                    <h4>{props.institutionTitle}</h4>
                    <p className={"short--title"}>{props.courseDescription}</p>
                </Grid>

                <Grid md={4} item >
                </Grid>

                <Grid md={8} item className={"link"} >
                    <ion-icon name="link-outline"/>
                    <a href={props.link.pageLink} className={"link--text"}>{props.link.pageLink}</a>
                </Grid>
            </Grid>
    );
}

export default Achievement;
