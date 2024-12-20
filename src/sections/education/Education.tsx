import {Grid} from '@material-ui/core';
import './Education.css';
import Achievement from "./achievement/Achievement.tsx";
import {Section} from "react-scroll-section";
import React from 'react';

export type AchievementDetails = {
  institutionTitle: string;
  timeline: string;
  course: string;
  finishPiece?: string;
  courseDescription: string;
  link: Link;
};

export type Link = {
    pageLink: string;
    icon?: string;
}

// const elementarySchool: AchievementDetails = {
//     institutionTitle: "Elementray School Maks Pecar",
//     timeline: "September 2002 - June 2010",
//     course: "Elementary School",
//     courseDescription: "",
//     link: {pageLink: "https://www.makspecar.si/"}
// };

// const highSchool: AchievementDetails = {
//     institutionTitle: "Gimnasium Vič",
//     timeline: "September 2010 - July 2014",
//     course: "High School",
//     courseDescription: "",
//     link: {pageLink: "https://www.gimvic.org/international/"}
// };

const fri: AchievementDetails = {
    institutionTitle: "Computer Science and Engineering",
    timeline: "October 2015 - September 2018",
    course: "Faculty of Computer Science (University of Ljubljana)",
    finishPiece: "Bachelor thesis: Visualization of data on prescription drugs consumption",
    courseDescription: "I created different data visualizations of prescription medicine consumption in " +
        "Slovenia. " +
        "I visualized data was provided by the National Institute of Public Health. " +
        "Visualizations were implemented into a web application. " +
        "All visualizations were interactive and showed data from a different angle.",
    link: {pageLink: "https://fri.uni-lj.si/en"}
};

const businessInformatics: AchievementDetails = {
    institutionTitle: "Business Informatics",
    timeline: "October 2019 - May 2022",
    course: "Faculty of Economics (University of Ljubljana)",
    finishPiece: "Masters thesis: An analysis of the information system development method at a selected company",
    courseDescription: "I analysed the current Scrum workflow inside a company I worked at. I found the parts of the process that were not optimized and perscribed a proper solution for each of them. The proposed solutions were then also implemented in the teams work.",
    link: {pageLink: "http://www.ef.uni-lj.si/graduate/busifno"}
};

const beenius: AchievementDetails = {
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
    link: {pageLink: "https://www.beenius.tv/"}
};

const result: AchievementDetails = {
    institutionTitle: "Result d.o.o.",
    timeline: "November 2018 - August 2024",
    course: "Software Engineer",
    courseDescription: "I am developing custom software solutions for internal projects using Java Spring Boot framework. We are creating and maintaining microservices on the AWS platform.",
    link: {pageLink: "https://www.result.eu"}
};

const pronetGaming: AchievementDetails = {
    institutionTitle: "Pronet Gaming",
    timeline: "September 2024 - Present",
    course: "Software Engineer",
    courseDescription: "I am developing and maintaining a betting platform. It's a monolithic application, written mainly in Java EE and uses an Oracle database.",
    link: {pageLink: "https://pronetgaming.com"}
};

const fullEducation: AchievementDetails[] = [fri, businessInformatics];
const careers: AchievementDetails[] = [pronetGaming, result, beenius];


function Education() {
    return (
        <Section id={'experience'}>
            <div className={'container--grey'}>
                <Grid container className={'education--description'}>
                    <Grid md={12} xs={12} item>
                        <h2>Experience</h2>
                        <p className={"short--title"}>Masters degree</p>
                    </Grid>

                    <Grid md={12} xs={12} item className={'heading--2'}>
                        <h3>Education</h3>
                    </Grid>
                    {
                        fullEducation.map( (e, index) =>
                            <Achievement key={index} institutionTitle={e.institutionTitle} timeline={e.timeline} course={e.course} finishPiece={e.finishPiece} courseDescription={e.courseDescription} link={e.link} />
                        )
                    }
                    <Grid md={12} xs={12} item className={'heading--2'}>
                        <h3>Career</h3>
                    </Grid>
                    {
                        careers.map( (e, index) =>
                            <Achievement key={index} institutionTitle={e.institutionTitle} timeline={e.timeline} course={e.course} courseDescription={e.courseDescription} link={e.link} />
                        )
                    }
                </Grid>
            </div>
        </Section>
    );
}

export default Education;
