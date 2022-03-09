import { createTheme } from '@mui/material/styles';
const dummyTheme = createTheme();
const theme = createTheme({
    typography: {
        courseType: {
            textAlign: "center",
            fontFamily: "DancingScript",
            fontSize: "clamp(3rem, 5vw, 7rem)",
        },

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
            fontFamily: "SansterdamScript, Roboto",
            [dummyTheme.breakpoints.down('md')]: {
                fontSize: '2.5rem',
            },
            [dummyTheme.breakpoints.up('md')]: {
                fontSize: '4.5rem',
            },
        },

        signature: {
            color: "#d765d1",
            textShadow: "1px 1px 1px black",
            fontFamily: "SansterdamScript, Roboto",
            [dummyTheme.breakpoints.down('md')]: {
                fontSize: '2.5rem',
            },
            [dummyTheme.breakpoints.up('md')]: {
                fontSize: '4.5rem',
            },
        },

        introduction: {
            fontWeight: "100",
            fontFamily: "Quicksand, Roboto",
            color: "white",
            textShadow: "1px 1px 1px black",
            [dummyTheme.breakpoints.down('md')]: {
                fontSize: '1.2rem',
            },
            [dummyTheme.breakpoints.up('md')]: {
                fontSize: '2rem',
            },
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
        },
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
        courseType: React.CSSProperties;
        signature: React.CSSProperties;
        introduction: React.CSSProperties;
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
        courseType?: React.CSSProperties;
        signature?: React.CSSProperties;
        introduction: React.CSSProperties;
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
        courseType: true;
        signature: true;
        introduction: true;
    }
}

export { theme };
