import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();
theme.typography.caption = {
    fontWeight: "100",
    fontStyle: "italic",
    [theme.breakpoints.down('md')]: {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
};

export default function CourseDescription({description} : {description: string}) {
    return (
        <ThemeProvider theme={theme}>
            <Typography sx={{
                maxWidth:"1200px",
                marginTop: "2em",
                paddingLeft: "2em",
                paddingRight: "2em",
                marginBottom: "2em",
            }} variant="caption" gutterBottom textAlign={"justify"}>
                {description}
            </Typography>
        </ThemeProvider>
    )

}