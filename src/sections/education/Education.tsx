import React from 'react';
import { Container, Box, Typography, Card, CardContent, Chip, Link as MuiLink, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Education.css';

export interface Link {
    pageLink: string;
    icon?: string;
}

export interface AchievementDetails {
    institutionTitle: string;
    timeline: string;
    course: string;
    finishPiece?: string;
    courseDescription: string;
    link: Link;
}

const fri: AchievementDetails = {
    institutionTitle: "Computer Science and Engineering",
    timeline: "October 2015 - September 2018",
    course: "Faculty of Computer Science (University of Ljubljana)",
    finishPiece: "Bachelor thesis: Visualization of data on prescription drugs consumption",
    courseDescription: "I created different data visualizations of prescription medicine consumption in Slovenia. I visualized data was provided by the National Institute of Public Health. Visualizations were implemented into a web application. All visualizations were interactive and showed data from a different angle.",
    link: { pageLink: "https://fri.uni-lj.si/en" }
};

const businessInformatics: AchievementDetails = {
    institutionTitle: "Business Informatics",
    timeline: "October 2019 - May 2022",
    course: "Faculty of Economics (University of Ljubljana)",
    finishPiece: "Masters thesis: An analysis of the information system development method at a selected company",
    courseDescription: "I analysed the current Scrum workflow inside a company I worked at. I found the parts of the process that were not optimized and perscribed a proper solution for each of them. The proposed solutions were then also implemented in the teams work.",
    link: { pageLink: "http://www.ef.uni-lj.si/graduate/busifno" }
};

const beenius: AchievementDetails = {
    institutionTitle: "Beenius d.o.o.",
    timeline: "August 2017 - September 2017, February 2018 - May 2018",
    course: "Software Engineer",
    courseDescription: "I was a web developer in a scrum team of four members, which was responsible for development and maintenance of a web application, designed for streaming media. I was responsible for the back-end and front-end functionality of the application. The front-end was written in Javascript and JQuery. The back-end was written in PHP and used a MySQL database. During my time there I have also worked with JIRA and Swagger UI.",
    link: { pageLink: "https://www.beenius.tv/" }
};

const result: AchievementDetails = {
    institutionTitle: "Result d.o.o.",
    timeline: "November 2018 - August 2024",
    course: "Software Engineer",
    courseDescription: "I was developing custom software solutions for internal projects using Java Spring Boot framework. We were creating and maintaining microservices on the AWS platform.",
    link: { pageLink: "https://www.result.eu" }
};

const pronetGaming: AchievementDetails = {
    institutionTitle: "Pronet Gaming",
    timeline: "September 2024 - Present",
    course: "Software Engineer",
    courseDescription: "I am developing and maintaining a betting platform. It's a monolithic application, written mainly in Java EE and uses an Oracle database.",
    link: { pageLink: "https://pronetgaming.com" }
};

const fullEducation: AchievementDetails[] = [fri, businessInformatics];
const careers: AchievementDetails[] = [pronetGaming, result, beenius];

interface AchievementCardProps {
    achievement: AchievementDetails;
    index: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card
                sx={{
                    mb: 3,
                    background: 'rgba(30, 41, 59, 0.5)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
                        borderColor: 'rgba(99, 102, 241, 0.5)',
                    }
                }}
            >
                <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, flexWrap: 'wrap', gap: 3 }}>
                        <Box>
                            <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5, color: '#6366f1', textAlign: 'left' }}>
                                {achievement.institutionTitle}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 1, textAlign: 'left' }}>
                                {achievement.course}
                            </Typography>
                        </Box>
                        <Chip
                            label={achievement.timeline}
                            sx={{
                                background: 'linear-gradient(135deg, #6366f1, #ec4899)',
                                color: 'white',
                                fontWeight: 500,
                            }}
                        />
                    </Box>

                    {achievement.finishPiece && (
                        <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#ec4899', mb: 2 }}>
                            {achievement.finishPiece}
                        </Typography>
                    )}

                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2 }}>
                        {achievement.courseDescription}
                    </Typography>

                    <MuiLink
                        href={achievement.link.pageLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: '#6366f1',
                            textDecoration: 'none',
                            fontWeight: 500,
                            '&:hover': {
                                textDecoration: 'underline',
                            }
                        }}
                    >
                        Visit Website →
                    </MuiLink>
                </CardContent>
            </Card>
        </motion.div>
    );
};

function Education() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Box
            id="experience"
            sx={{
                py: 10,
                background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
                position: 'relative',
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2rem', md: '3rem' },
                            fontWeight: 700,
                            mb: 1,
                            textAlign: 'center',
                            color: '#cbd5e1',
                        }}
                    >
                        Experience
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'text.secondary',
                            textAlign: 'center',
                            mb: 6,
                        }}
                    >
                        Masters degree
                    </Typography>
                </motion.div>

                <Box sx={{ mb: 8 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: { xs: '1.75rem', md: '2.125rem' },
                            fontWeight: 600,
                            mb: 4,
                            background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textAlign: 'center'
                        }}
                    >
                        Education
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {fullEducation.map((achievement, index) => (
                            <Grid item xs={12} md={10} key={index}>
                                <AchievementCard achievement={achievement} index={index} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box>
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: { xs: '1.75rem', md: '2.125rem' },
                            fontWeight: 600,
                            mb: 4,
                            background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textAlign: 'center'
                        }}
                    >
                        Career
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {careers.map((achievement, index) => (
                            <Grid item xs={12} md={10} key={index}>
                                <AchievementCard achievement={achievement} index={index} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Education;
