import styles from "./courseinfo.module.css";
import Typography from '@mui/material/Typography';
import Box from "@mui/system/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
theme.typography.caption = {
    fontWeight: "100",
    fontStyle: "italic",
    [theme.breakpoints.down('md')]: {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
};
export default function CourseOutcomes({ outcomes, backgroundImage }: { outcomes: string[], backgroundImage: string }) {
    return (
        <Box className={styles['course-outcomes-layout']} >
            <Box sx={{
                maxWidth: "1200px",
                width: "80vw",
                height: "100vh",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url(${backgroundImage})`
            }}>
                <Typography textAlign={"center"} className={"course-outcomes-title"} variant="h4">
                    Sau khóa học, bạn có thể:
                </Typography>

                <ul className={styles['course-outcomes']}>
                    {outcomes.map((outcome, idx) => {
                        return (
                            <li className={styles['outcome']}
                                key={idx}>
                                <ThemeProvider theme={theme}>
                                    <Typography variant="caption">
                                        {outcome}
                                    </Typography>
                                </ThemeProvider>

                            </li>
                        )
                    })}
                </ul>
            </Box>

        </Box >





    )
}