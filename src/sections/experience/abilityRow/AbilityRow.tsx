import {AbilityRowInfo} from "../Experience";
import './AbilityRow.css';
import {Grid} from "@mui/material";
import SignalWifi0BarOutlinedIcon from '@mui/icons-material/SignalWifi0BarOutlined';


function AbilityRow(skillInfo: AbilityRowInfo) {
    return(
        <Grid container className={"ability--row"}>
            <Grid item>{skillInfo.skillName}</Grid>
            <Grid item>
                {
                    Array.from(Array(skillInfo.yearsOfExperience)).map((x, index) => <SignalWifi0BarOutlinedIcon fontSize={"small"} key={index}></SignalWifi0BarOutlinedIcon>)
                }
            </Grid>
        </Grid>
    );
}

export default AbilityRow;
