"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
require("./Header.css");
var react_scroll_section_1 = require("react-scroll-section");
function Header() {
    var profileSection = (0, react_scroll_section_1.useScrollSection)('profile');
    var experienceSection = (0, react_scroll_section_1.useScrollSection)('experience');
    var abilitiesSection = (0, react_scroll_section_1.useScrollSection)('abilities');
    var contactSection = (0, react_scroll_section_1.useScrollSection)('contact');
    return (<core_1.Grid container className={'header'}>
            <core_1.Grid item className={'header--item'} onClick={profileSection.onClick}>Profile</core_1.Grid>
            <core_1.Grid item className={'header--item'} onClick={experienceSection.onClick}>Experience</core_1.Grid>
            <core_1.Grid item className={'header--item'} onClick={abilitiesSection.onClick}>Abilities</core_1.Grid>
            <core_1.Grid item className={'header--item'} onClick={contactSection.onClick}>Contact</core_1.Grid>
        </core_1.Grid>);
}
exports.default = Header;
