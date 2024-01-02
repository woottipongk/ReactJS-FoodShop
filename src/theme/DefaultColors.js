import { createTheme } from "@mui/material/styles";
import typography from "./Typography";
import { shadows } from "./Shadows";

const baselightTheme = createTheme({
    direction: 'ltr',
    palette: {
        primary: {
            main: '#263238',
            light: '#5393ff',
            dark: '#357a38',
            contrastText: "#fff" //button text white instead of black
        },
        secondary: {
            main: '#263238',
            light: '#f0f2f9',
            dark: '#23afdb',
        },
        success: {
            main: '#13DEB9',
            light: '#E6FFFA',
            dark: '#02b3a9',
            contrastText: '#ffffff',
        },
        info: {
            main: '#539BFF',
            light: '#EBF3FE',
            dark: '#1682d4',
            contrastText: '#ffffff',
        },
        error: {
            main: '#FF0000',
            light: '#FDEDE8',
            dark: '#f3704d',
            contrastText: '#ffffff',
        },
        warning: {
            main: '#FFAE1F',
            light: '#FEF5E5',
            dark: '#ae8e59',
            contrastText: '#ffffff',
        },
        purple: {
            A50: '#EBF3FE',
            A100: '#6610f2',
            A200: '#557fb9',
        },
        grey: {
            100: '#F2F6FA',
            200: '#EAEFF4',
            300: '#DFE5EF',
            400: '#7C8FAC',
            500: '#5A6A85',
            600: '#2A3547',

        },
        text: {
            primary: '#000000',
            secondary: '#000000',
        },
        action: {
            disabledBackground: 'rgba(73,82,88,0.12)',
            hoverOpacity: 0.02,
            hover: '#f6f9fc',
        },
        divider: '#e5eaef',
    },
    typography,
    shadows
},

);

export { baselightTheme };