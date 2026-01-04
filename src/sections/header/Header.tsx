import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Button, Container, IconButton, Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import './Header.css';

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navItems = [
        { label: 'Experience', id: 'experience' },
        { label: 'Abilities', id: 'abilities' },
        { label: 'Contact', id: 'contact' },
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setMobileOpen(false);
    };

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                background: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid rgba(99, 102, 241, 0.1)',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Box
                            sx={{
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                cursor: 'pointer',
                            }}
                            onClick={() => scrollToSection('profile')}
                        >
                            Vid Rotar
                        </Box>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                        {navItems.map((item) => (
                            <motion.div
                                key={item.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    onClick={() => scrollToSection(item.id)}
                                    sx={{
                                        color: 'text.primary',
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        px: 2,
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 0,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: 0,
                                            height: '2px',
                                            background: 'linear-gradient(90deg, #6366f1, #ec4899)',
                                            transition: 'width 0.3s ease',
                                        },
                                        '&:hover::after': {
                                            width: '80%',
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            </motion.div>
                        ))}
                    </Box>

                    {/* Mobile Menu Icon */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: 'none' }, color: '#cbd5e1' }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Container>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        width: '280px',
                        background: '#0f172a',
                        borderLeft: '1px solid rgba(99, 102, 241, 0.2)',
                        padding: '2rem 1rem',
                    },
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
                    <IconButton onClick={handleDrawerToggle} sx={{ color: '#cbd5e1' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item.id} disablePadding>
                            <ListItemButton
                                onClick={() => scrollToSection(item.id)}
                                sx={{
                                    borderRadius: 2,
                                    mb: 1,
                                    '&:hover': {
                                        background: 'rgba(99, 102, 241, 0.1)',
                                    }
                                }}
                            >
                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{
                                        fontSize: '1.25rem',
                                        fontWeight: 600,
                                        color: '#cbd5e1',
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </AppBar>
    );
}

export default Header;
