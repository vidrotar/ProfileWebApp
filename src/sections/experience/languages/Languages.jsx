"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
function Languages() {
    return (<>
            <core_1.Grid md={12} item className={"heading--2"}>
                <h3>Languages</h3>
            </core_1.Grid>
            <core_1.Grid direction={"column"} md={6} className={"skills--column"} item>
                <core_1.Grid container className={"first--row"}>
                    <core_1.Grid item>Language</core_1.Grid>
                    <core_1.Grid item>Level</core_1.Grid>
                </core_1.Grid>
                <core_1.Grid container className={"ability--row"}>
                    <core_1.Grid item>Slovenian</core_1.Grid>
                    <core_1.Grid item>C2</core_1.Grid>
                </core_1.Grid>
                <core_1.Grid container className={"ability--row"}>
                    <core_1.Grid item>English</core_1.Grid>
                    <core_1.Grid item>C1</core_1.Grid>
                </core_1.Grid>
            </core_1.Grid>
            <core_1.Grid md={6} item>
                <core_1.Grid container className={"first--row"}>
                    <core_1.Grid item>Language</core_1.Grid>
                    <core_1.Grid item>Level</core_1.Grid>
                </core_1.Grid>
                <core_1.Grid container className={"ability--row"}>
                    <core_1.Grid item>German</core_1.Grid>
                    <core_1.Grid item>A1</core_1.Grid>
                </core_1.Grid>
            </core_1.Grid>
        </>);
}
exports.default = Languages;
