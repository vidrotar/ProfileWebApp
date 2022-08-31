import {Grid, Link} from '@material-ui/core';
import {AchievementDetails} from "../Education";
import "./Achievement.css";

function Achievement(props: AchievementDetails) {
    console.log(props);

    return (
            <Grid container className={'contact--description'}>
                <Grid md={4} item className={'achievement--heading'}>
                    <h4>{props.course}</h4>
                    <p>{props.timeline}</p>
                </Grid>

                <Grid md={8} item className={'heading--2'}>
                    <h4>{props.institutionTitle}</h4>
                    {
                        props.finishPiece && (
                            <p className={"short--title"}>{props.finishPiece}</p>
                        )
                    }
                    <p className={"short--title"}>{props.courseDescription}</p>
                </Grid>

                <Grid md={4} item >
                </Grid>

                <Grid md={8} item className={"link"} >
                    <ion-icon name="link-outline"/>
                    <Link underline="hover" href={props.link.pageLink}>{props.link.pageLink}</Link>
                </Grid>
            </Grid>
    );
}

export default Achievement;
