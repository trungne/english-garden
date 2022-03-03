import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import { createTheme } from '@mui/material/styles';
import { Fade } from "react-awesome-reveal";


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

            <Fade triggerOnce damping={0.1} cascade>

                <Typography sx={{
                    display: "flex",
                    maxWidth: "1200px",
                    paddingLeft: "2em",
                    paddingRight: "2em",
                    marginTop: "2em",
                    marginBottom: "2em",
                }} variant="normalText" component={"div"} gutterBottom textAlign={"justify"}>
                    {description}
                </Typography>

            </Fade>

        </Box>
    )

}