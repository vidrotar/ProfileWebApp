import React from 'react';
import { Container, Box, Typography, Link as MuiLink } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Envelope, LinkedinLogo, GithubLogo } from 'phosphor-react';
import './Contact.css';

function Contact() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const contactMethods = [
        {
            icon: <LinkedinLogo size={48} weight="duotone" />,
            label: 'LinkedIn',
            value: 'linkedin.com/in/vid-rotar',
            link: 'https://www.linkedin.com/in/vid-rotar',
            color: '#0077b5',
        },
        {
            icon: <Envelope size={48} weight="duotone" />,
            label: 'Email',
            value: 'vidrotar@duck.com',
            link: 'mailto:vidrotar@duck.com',
            color: '#ec4899',
        },
        {
            icon: <GithubLogo size={48} weight="duotone" />,
            label: 'GitHub',
            value: 'github.com/vidrotar',
            link: 'https://github.com/vidrotar',
            color: '#6366f1',
        },
    ];

    return (
        <Box
            id="contact"
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
                            fontSize: { xs: '2.25rem', md: '3rem' },
                            fontWeight: 700,
                            mb: 1,
                            textAlign: 'center',
                            color: '#cbd5e1',
                        }}
                    >
                        Contact
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.25rem' },
                            color: 'text.secondary',
                            textAlign: 'center',
                            mb: { xs: 5, md: 6 },
                        }}
                    >
                        You can contact me via:
                    </Typography>
                </motion.div>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 4,
                        justifyContent: 'center',
                        alignItems: 'stretch',
                    }}
                >
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ flex: 1, maxWidth: '350px' }}
                        >
                            <MuiLink
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ textDecoration: 'none' }}
                            >
                                <Box
                                    sx={{
                                        p: 4,
                                        borderRadius: 3,
                                        background: 'rgba(30, 41, 59, 0.5)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(99, 102, 241, 0.2)',
                                        textAlign: 'center',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            boxShadow: `0 15px 40px ${method.color}40`,
                                            borderColor: method.color,
                                            '& .contact-icon': {
                                                color: method.color,
                                                transform: 'scale(1.1)',
                                            }
                                        }
                                    }}
                                >
                                    <Box
                                        className="contact-icon"
                                        sx={{
                                            color: 'text.primary',
                                            mb: 2,
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        {method.icon}
                                    </Box>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 600,
                                            mb: 1,
                                            color: 'text.primary',
                                        }}
                                    >
                                        {method.label}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'text.secondary',
                                            wordBreak: 'break-word',
                                        }}
                                    >
                                        {method.value}
                                    </Typography>
                                </Box>
                            </MuiLink>
                        </motion.div>
                    ))}
                </Box>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <Box sx={{ textAlign: 'center', mt: 8, pt: 4, borderTop: '1px solid rgba(99, 102, 241, 0.2)' }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            © {new Date().getFullYear()} Vid Rotar. Built with React & MUI.
                        </Typography>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}

export default Contact;
