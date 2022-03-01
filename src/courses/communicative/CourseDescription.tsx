import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
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

export default function CourseDescription({ description }: { description: string }) {
    return (

        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
        }}>
            <ThemeProvider theme={theme}>
                <Typography sx={{
                    display: "flex",

                    maxWidth: "1200px",

                    paddingLeft: "2em",
                    paddingRight: "2em",
                    marginTop: "2em",
                    marginBottom: "2em",
                }} variant="caption" component={"div"} gutterBottom textAlign={"justify"}>
                    {description}
                </Typography>
            </ThemeProvider>
        </Box>
    )

}