"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./SkillRow.css");
var material_1 = require("@mui/material");
var SignalWifiStatusbar4BarOutlined_1 = require("@mui/icons-material/SignalWifiStatusbar4BarOutlined");
function SkillRow(skillInfo) {
    return (<material_1.Grid container className={"skills--row"}>
            <material_1.Grid item>{skillInfo.skillName}</material_1.Grid>
            <material_1.Grid item>
                {/*TODO change to outlined*/}
                <SignalWifiStatusbar4BarOutlined_1.default></SignalWifiStatusbar4BarOutlined_1.default>

            </material_1.Grid>
        </material_1.Grid>);
}
exports.default = SkillRow;
