import bulletImg from "./static/bullet128.png";

import styles from "./courseinfo.module.css";
import Typography from '@mui/material/Typography';
import Box from "@mui/system/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from "@mui/material/List";

const theme = createTheme();
theme.typography.caption = {
    fontWeight: "100",

    fontFamily: "Quicksand",
    color: "black",
    textShadow: "1px 1px 5px white",
    [theme.breakpoints.down('md')]: {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
};

const titleTheme = createTheme();
titleTheme.typography.caption = {
    fontWeight: "100",

    fontFamily: "Quicksand",
    color: "black",
    textShadow: "1px 1px 5px white",
    [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
    },
};
export default function CourseOutcomes({ outcomes, backgroundImage }: { outcomes: string[], backgroundImage: string }) {
    return (
        <Box sx={{
            '&:before': {
                position: "absolute",
                content: '""',
                width: "100%",
                height: "100%",
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                opacity: 0.8,
                filter: "brightness(99%)",
            }
        }} className={styles['course-outcomes-layout']} >
            <ThemeProvider theme={titleTheme}>
                <Typography sx={{
                    fontSize: "2rem",
                    zIndex: "9999",
                }} textAlign={"center"} className={"course-outcomes-title"} variant="caption">
                    Sau khóa học, bạn có thể:
                </Typography>
            </ThemeProvider>


            <List className={styles['course-outcomes']}>
                {outcomes.map((outcome, idx) => {
                    return (
                        <ListItem key={idx}>
                            <ListItemIcon>
                                <img width={"25px"} height={"25px"} alt="bullet" src={bulletImg} />
                            </ListItemIcon>
                            <ThemeProvider theme={theme}>
                                <ListItemText
                                    primaryTypographyProps={{
                                        variant: "caption"
                                    }}
                                    primary={outcome}>
                                </ListItemText>
                            </ThemeProvider>

                        </ListItem>
                    )
                })}
            </List>
        </Box>
    )
}