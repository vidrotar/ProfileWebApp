"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./AbilityRow.css");
var material_1 = require("@mui/material");
var SignalWifi0BarOutlined_1 = require("@mui/icons-material/SignalWifi0BarOutlined");
function AbilityRow(skillInfo) {
    return (<material_1.Grid container className={"ability--row"}>
            <material_1.Grid item>{skillInfo.skillName}</material_1.Grid>
            <material_1.Grid item>
                {Array.from(Array(skillInfo.yearsOfExperience)).map(function (x, index) { return <SignalWifi0BarOutlined_1.default fontSize={"small"} key={index}></SignalWifi0BarOutlined_1.default>; })}
            </material_1.Grid>
        </material_1.Grid>);
}
exports.default = AbilityRow;
