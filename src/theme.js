import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Define custom colors
const primaryColor = '#6366f1'; // Indigo 500
const secondaryColor = '#ec4899'; // Pink 500
const darkBackground = '#0f172a'; // Slate 900
const paperBackground = '#1e293b'; // Slate 800

let theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        },
        background: {
            default: darkBackground,
            paper: paperBackground,
        },
        text: {
            primary: '#f8fafc',
            secondary: '#94a3b8',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontWeight: 600,
            letterSpacing: '-0.01em',
        },
        h3: {
            fontWeight: 600,
        },
        button: {
            textTransform: 'none', // Remove uppercase default
            fontWeight: 600,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none', // Remove default overlapping gradients in dark mode
                },
                rounded: {
                    borderRadius: 16,
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarColor: '#6b7280 #1e293b',
                    '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                        backgroundColor: '#1e293b',
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
                        borderRadius: 8,
                        backgroundColor: '#6b7280',
                        minHeight: 24,
                        border: '2px solid #1e293b',
                    },
                    '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
                        backgroundColor: '#9ca3af',
                    },
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
