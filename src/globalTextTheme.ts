import { createTheme } from '@mui/material/styles';
const dummyTheme = createTheme();
const theme = createTheme({
    typography: {
        name: {
            color: "#581f7e",
            fontFamily: "SansterdamScript",
            [dummyTheme.breakpoints.down('md')]: {
                fontSize: '3rem',
            },
            [dummyTheme.breakpoints.up('md')]: {
                fontSize: '4.5rem',
            },
        },

        banner: {
            color: "#581f7e",
            fontFamily: "SansterdamScript, Roboto"
        },

        largeText: {
            fontWeight: "100",
            fontFamily: "Quicksand, Roboto",
            [dummyTheme.breakpoints.down('md')]: {
                fontSize: '2rem',
            },
            [dummyTheme.breakpoints.up('md')]: {
                fontSize: '3rem',
            },
        },

        normalText: {
            fontWeight: "100",
            fontFamily: "Quicksand, Roboto",
            textShadow: "1px 1px 5px white",
            [dummyTheme.breakpoints.down('md')]: {
                fontSize: '1.2rem',
            },
            [dummyTheme.breakpoints.up('md')]: {
                fontSize: '2rem',
            },
        }
    }
});

declare module '@mui/material/styles' {
    interface TypographyVariants {
        banner: React.CSSProperties;
        largeText: React.CSSProperties;
        normalText: React.CSSProperties;
        name: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        banner?: React.CSSProperties;
        largeText?: React.CSSProperties;
        normalText?: React.CSSProperties;
        name?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        banner: true;
        largeText: true;
        normalText: true;
        name: true;
    }
}

export { theme };