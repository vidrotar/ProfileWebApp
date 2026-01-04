import React from 'react';
import { Container, Grid, Box, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import './Profile.css';
import ProfilePicture from '../../images/updatedProfilePhoto.jpg';

function Profile() {
    function calculateAge() {
        const today = new Date();
        const birthDate = new Date('1995-03-04');
        const ageInMilliseconds = today.getTime() - birthDate.getTime();
        return Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    }

    return (
        <Box
            id="profile"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
                    pointerEvents: 'none',
                }
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 8 }}>
                <Grid container spacing={6} alignItems="center">
                    {/* Left side - Text content */}
                    <Grid item xs={12} md={7} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '2.5rem', md: '4rem' },
                                    fontWeight: 700,
                                    mb: 2,
                                    background: 'linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Vid Rotar
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: { xs: '1.25rem', md: '1.75rem' },
                                    fontWeight: 400,
                                    mb: { xs: 4, md: 5 },
                                    background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Creative Full Stack Developer
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Box
                                        sx={{
                                            p: 3,
                                            borderRadius: 3,
                                            background: 'rgba(30, 41, 59, 0.5)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(99, 102, 241, 0.2)',
                                            height: '100%',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
                                            }
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#6366f1' }}>
                                            About Me
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                                            I am a fullstack developer who loves structure, order, and quality. I thrive working in teams.
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Box
                                        sx={{
                                            p: 3,
                                            borderRadius: 3,
                                            background: 'rgba(30, 41, 59, 0.5)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(236, 72, 153, 0.2)',
                                            height: '100%',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                boxShadow: '0 10px 30px rgba(236, 72, 153, 0.3)',
                                            }
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#ec4899' }}>
                                            Details
                                        </Typography>
                                        <Box sx={{ color: 'text.secondary', textAlign: 'left' }}>
                                            <Typography variant="body2" sx={{ mb: 0.5 }}>
                                                <strong>Name:</strong> Vid Rotar
                                            </Typography>
                                            <Typography variant="body2" sx={{ mb: 0.5 }}>
                                                <strong>Age:</strong> {calculateAge()} years
                                            </Typography>
                                            <Typography variant="body2">
                                                <strong>Location:</strong> Slovenia
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </motion.div>
                    </Grid>

                    {/* Right side - Profile picture */}
                    <Grid item xs={12} md={5} sx={{ order: { xs: -1, md: 1 }, mb: { xs: 4, md: 0 } }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    position: 'relative',
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: '-15px',
                                            left: '-15px',
                                            right: '-15px',
                                            bottom: '-15px',
                                            background: 'linear-gradient(135deg, #6366f1, #ec4899)',
                                            borderRadius: '50%',
                                            opacity: 0.3,
                                            filter: 'blur(25px)',
                                            animation: 'pulse 3s ease-in-out infinite',
                                        },
                                        '@keyframes pulse': {
                                            '0%, 100%': { opacity: 0.3 },
                                            '50%': { opacity: 0.5 },
                                        }
                                    }}
                                >
                                    <Avatar
                                        src={ProfilePicture}
                                        alt="Vid Rotar"
                                        sx={{
                                            width: { xs: 200, sm: 280, md: 350 },
                                            height: { xs: 200, sm: 280, md: 350 },
                                            border: '4px solid rgba(99, 102, 241, 0.3)',
                                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                                            position: 'relative',
                                            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                                            '& img': {
                                                objectFit: 'cover',
                                                objectPosition: 'center top',
                                            }
                                        }}
                                    />
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Profile;
