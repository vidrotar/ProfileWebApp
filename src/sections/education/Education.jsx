"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
require("./Education.css");
var Achievement_tsx_1 = require("./achievement/Achievement.tsx");
var react_scroll_section_1 = require("react-scroll-section");
var elementarySchool = {
    institutionTitle: "Elementray School Maks Pecar",
    timeline: "September 2002 - June 2010",
    course: "Elementary School",
    courseDescription: "",
    link: { pageLink: "https://www.makspecar.si/" }
};
var highSchool = {
    institutionTitle: "Gimnasium Vič",
    timeline: "September 2010 - July 2014",
    course: "High School",
    courseDescription: "",
    link: { pageLink: "https://www.gimvic.org/international/" }
};
var fri = {
    institutionTitle: "Computer Science and Engineering",
    timeline: "October 2015 - September 2018",
    course: "Faculty of Computer Science (University of Ljubljana)",
    finishPiece: "Bachelor thesis: Visualization of data on prescription drugs consumption",
    courseDescription: "I created different data visualizations of prescription medicine consumption in " +
        "Slovenia. " +
        "I visualized data was provided by the National Institute of Public Health. " +
        "Visualizations were implemented into a web application. " +
        "All visualizations were interactive and showed data from a different angle.",
    link: { pageLink: "https://fri.uni-lj.si/en" }
};
var businessInformatics = {
    institutionTitle: "Business Informatics",
    timeline: "October 2019 - May 2022",
    course: "Faculty of Economics (University of Ljubljana)",
    finishPiece: "Masters thesis",
    courseDescription: "The Business Informatics programme is intended for all those who are interested in the use of information technology in companies and other organisations and are aware that this, in addition to knowledge of technology, also requires business knowledge. The emphasis is on digitalisation, business analytics, and the improvement of business processes and business models through the development of information systems.",
    link: { pageLink: "http://www.ef.uni-lj.si/graduate/busifno" }
};
var beenius = {
    institutionTitle: "Beenius d.o.o.",
    timeline: "August 2017 - September 2017, February 2018 - May 2018",
    course: "Software Engineer",
    courseDescription: "I was a web developer in a scrum team of four members, which was responsible\n" +
        "for development and maintenance of a web application, designed for streaming\n" +
        "media.\n" +
        "I was responsible for the back-end and front-end functionality of the application.\n" +
        "The front-end was written in Javascript and JQuery. The back-end was written\n" +
        "in PHP and used a MySQL database.\n" +
        "During my time there I have also worked with JIRA and Swagger UI.",
    link: { pageLink: "https://www.beenius.tv/" }
};
var result = {
    institutionTitle: "Result d.o.o.",
    timeline: "November 2018 - Present",
    course: "Software Engineer",
    courseDescription: "I am developing custom software solutions for internal projects using Java frameworks. We are creating and maintaining microservices inside a big platform.",
    link: { pageLink: "https://www.result.eu/" }
};
var fullEducation = [elementarySchool, highSchool, fri, businessInformatics];
var careers = [beenius, result];
function Education() {
    return (<react_scroll_section_1.Section id={'experience'}>
            <div className={'container--grey'}>
                <core_1.Grid container className={'education--description'}>
                    <core_1.Grid md={12} xs={12} item>
                        <h2>Experience</h2>
                        <p className={"short--title"}>Masters degree</p>
                    </core_1.Grid>

                    <core_1.Grid md={12} xs={12} item className={'heading--2'}>
                        <h3>Education</h3>
                    </core_1.Grid>
                    {fullEducation.map(function (e, index) {
            return <Achievement_tsx_1.default key={index} institutionTitle={e.institutionTitle} timeline={e.timeline} course={e.course} finishPiece={e.finishPiece} courseDescription={e.courseDescription} link={e.link}/>;
        })}
                    <core_1.Grid md={12} xs={12} item className={'heading--2'}>
                        <h3>Career</h3>
                    </core_1.Grid>
                    {careers.map(function (e, index) {
            return <Achievement_tsx_1.default key={index} institutionTitle={e.institutionTitle} timeline={e.timeline} course={e.course} courseDescription={e.courseDescription} link={e.link}/>;
        })}
                </core_1.Grid>
            </div>
        </react_scroll_section_1.Section>);
}
exports.default = Education;
