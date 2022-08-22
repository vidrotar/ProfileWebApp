import {Grid} from "@material-ui/core";

function Languages() {
    return (
        <>
            <Grid md={12} item className={"heading--2"}>
                <h3>Languages</h3>
            </Grid>
            <Grid direction={"column"} md={6} xs={12} className={"skills--column"} item>
                <Grid container className={"first--row"}>
                    <Grid item>Language</Grid>
                    <Grid item>Level</Grid>
                </Grid>
                <Grid container className={"ability--row"}>
                    <Grid item>Slovenian</Grid>
                    <Grid item>C2</Grid>
                </Grid>
                <Grid container className={"ability--row"}>
                    <Grid item>English</Grid>
                    <Grid item>C1</Grid>
                </Grid>
            </Grid>
            <Grid md={6} item>
                <Grid container className={"first--row"}>
                    <Grid item>Language</Grid>
                    <Grid item>Level</Grid>
                </Grid>
                <Grid container className={"ability--row"}>
                    <Grid item>German</Grid>
                    <Grid item>A1</Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Languages;
