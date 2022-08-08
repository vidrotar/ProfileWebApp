import {SkillRowInfo} from "../Experience";
import './SkillRow.css';
import {Grid} from "@mui/material";
import SignalWifi0BarOutlinedIcon from '@mui/icons-material/SignalWifiStatusbar4BarOutlined';


function SkillRow(skillInfo: SkillRowInfo) {
    return(
        <Grid container className={"skills--row"}>
            <Grid item>{skillInfo.skillName}</Grid>
            <Grid item>
                {/*TODO change to outlined*/}
                <SignalWifi0BarOutlinedIcon></SignalWifi0BarOutlinedIcon >

            </Grid>
        </Grid>
    );
}

export default SkillRow;
