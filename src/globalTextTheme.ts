import { createTheme } from '@mui/material/styles';
const dummyTheme = createTheme();
const theme = createTheme({
    typography: {
        home: {
            textAlign: "center",
            fontFamily: "DancingScript",
            [dummyTheme.breakpoints.down('md')]: {
                fontSize: '2rem',
            },
            [dummyTheme.breakpoints.up('md')]: {
                fontSize: '3rem',
            },
            [dummyTheme.breakpoints.up('lg')]: {
                fontSize: '4.5rem',
            },
            [dummyTheme.breakpoints.up('xl')]: {
                fontSize: '6rem',
            },
        },
        homeSmall: {
            fontFamily: "DancingScript",
            [dummyTheme.breakpoints.down('md')]: {
                fontSize: '1.2rem',
            },
            [dummyTheme.breakpoints.up('md')]: {
                fontSize: '2rem',
            },
        },

        menu: {
            fontFamily: "DancingScript",
            [dummyTheme.breakpoints.down('md')]: {
                fontSize: '0.8rem',
            },
            [dummyTheme.breakpoints.up('md')]: {
                fontSize: '1rem',
            },
        },

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
        home: React.CSSProperties;
        homeSmall: React.CSSProperties;
        menu: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        banner?: React.CSSProperties;
        largeText?: React.CSSProperties;
        normalText?: React.CSSProperties;
        name?: React.CSSProperties;
        home?: React.CSSProperties;
        homeSmall?: React.CSSProperties;
        menu?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        banner: true;
        largeText: true;
        normalText: true;
        name: true;
        home: true;
        homeSmall: true;
        menu: true;
    }
}

export { theme };