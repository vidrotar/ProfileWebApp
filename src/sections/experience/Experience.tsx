import React from 'react';
import { Container, Box, Typography, Grid, Chip, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

export type AbilityRowInfo = {
    skillName: string;
    yearsOfExperience: number;
};

// Skills data
const languageSkills: AbilityRowInfo[] = [
    { skillName: "Java", yearsOfExperience: 6 },
    { skillName: "PHP", yearsOfExperience: 2 },
    { skillName: "Javascript", yearsOfExperience: 3 },
    { skillName: "HTML/CSS", yearsOfExperience: 2 },
    { skillName: "Python", yearsOfExperience: 1 },
];

const backendSkills: AbilityRowInfo[] = [
    { skillName: "SpringBoot", yearsOfExperience: 4 },
    { skillName: "Docker", yearsOfExperience: 4 },
    { skillName: "Kubernetes", yearsOfExperience: 3 },
    { skillName: "Kafka", yearsOfExperience: 3 },
    { skillName: "Kibana", yearsOfExperience: 3 },
    { skillName: "Grafana", yearsOfExperience: 1 },
    { skillName: "Prometheus", yearsOfExperience: 1 },
    { skillName: "Symfony", yearsOfExperience: 1 },
];

const frontendSkills: AbilityRowInfo[] = [
    { skillName: "React", yearsOfExperience: 2 },
    { skillName: "Typescript", yearsOfExperience: 2 },
    { skillName: "Jquery", yearsOfExperience: 1 },
];

const developingKnowledge: AbilityRowInfo[] = [
    { skillName: "Agile", yearsOfExperience: 4 },
    { skillName: "Scrum", yearsOfExperience: 5 },
    { skillName: "Continuous Integration", yearsOfExperience: 4 },
    { skillName: "Version Control", yearsOfExperience: 3 },
];

const mainTools: AbilityRowInfo[] = [
    { skillName: "Jira", yearsOfExperience: 4 },
    { skillName: "Git", yearsOfExperience: 4 },
    { skillName: "BitBucket", yearsOfExperience: 2 },
    { skillName: "Confluence", yearsOfExperience: 2 },
    { skillName: "GitHub", yearsOfExperience: 3 },
];

const secondaryTools: AbilityRowInfo[] = [
    { skillName: "IntellIj", yearsOfExperience: 4 },
    { skillName: "Webstorm", yearsOfExperience: 2 },
    { skillName: "PhpStorm", yearsOfExperience: 2 },
];

const languages = [
    { name: "Slovene", level: "C2" },
    { name: "English", level: "C1" },
    { name: "German", level: "A1" },
];

interface SkillCardProps {
    title: string;
    skills: AbilityRowInfo[];
    index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const maxYears = 6;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Box
                sx={{
                    p: 4,
                    borderRadius: 3,
                    background: 'rgba(30, 41, 59, 0.5)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
                        borderColor: 'rgba(99, 102, 241, 0.5)',
                    }
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#6366f1' }}>
                    {title}
                </Typography>
                {skills.map((skill, idx) => (
                    <Box key={idx} sx={{ mb: 2.5 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                {skill.skillName}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? 'year' : 'years'}
                            </Typography>
                        </Box>
                        <LinearProgress
                            variant="determinate"
                            value={(skill.yearsOfExperience / maxYears) * 100}
                            sx={{
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                                '& .MuiLinearProgress-bar': {
                                    background: 'linear-gradient(90deg, #6366f1, #ec4899)',
                                    borderRadius: 4,
                                }
                            }}
                        />
                    </Box>
                ))}
            </Box>
        </motion.div>
    );
};

function Experience() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Box
            id="abilities"
            sx={{
                py: 10,
                background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
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
                        Abilities
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'text.secondary',
                            textAlign: 'center',
                            mb: 6,
                        }}
                    >
                        What I've learned so far
                    </Typography>
                </motion.div>

                {/* Skills Section */}
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
                        Skills
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <SkillCard title="Languages" skills={languageSkills} index={0} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SkillCard title="Backend" skills={backendSkills} index={1} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SkillCard title="Frontend" skills={frontendSkills} index={2} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SkillCard title="Development Knowledge" skills={developingKnowledge} index={3} />
                        </Grid>
                    </Grid>
                </Box>

                {/* Tools Section */}
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
                        Tools
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <SkillCard title="Main Tools" skills={mainTools} index={0} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SkillCard title="IDEs" skills={secondaryTools} index={1} />
                        </Grid>
                    </Grid>
                </Box>

                {/* Languages Section */}
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
                        Languages
                    </Typography>
                    <Grid container spacing={3}>
                        {languages.map((lang, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Box
                                        sx={{
                                            p: 3,
                                            borderRadius: 3,
                                            background: 'rgba(30, 41, 59, 0.5)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(236, 72, 153, 0.2)',
                                            textAlign: 'center',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                boxShadow: '0 10px 30px rgba(236, 72, 153, 0.3)',
                                            }
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                            {lang.name}
                                        </Typography>
                                        <Chip
                                            label={lang.level}
                                            sx={{
                                                background: 'linear-gradient(135deg, #6366f1, #ec4899)',
                                                color: 'white',
                                                fontWeight: 600,
                                            }}
                                        />
                                    </Box>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Experience;