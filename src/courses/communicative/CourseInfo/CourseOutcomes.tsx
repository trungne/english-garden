import bulletImg from "./static/bullet128.png";

import styles from "./courseinfo.module.css";
import Typography from '@mui/material/Typography';
import Box from "@mui/system/Box";

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from "@mui/material/List";
import { Fade } from "react-awesome-reveal";
export default function CourseOutcomes({ outcomes, backgroundImage }: { outcomes: string[], backgroundImage: string }) {
    return (
        <Box sx={{
            '&:before': {
                position: "absolute",
                content: '""',
                width: "100%",
                minHeight: "100vh",
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                opacity: 0.8,
                filter: "brightness(99%)",
            }
        }} className={styles['course-outcomes-layout']} >
            <Typography textAlign={"center"} className={"course-outcomes-title"} variant="largeText">
                Sau khóa học, bạn có thể:
            </Typography>


            <List className={styles['course-outcomes']}>
                {outcomes.map((outcome, idx) => {
                    return (
                        <Fade triggerOnce direction="up">
                            <ListItem key={idx}>
                                <ListItemIcon>
                                    <img width={"25px"} height={"25px"} alt="bullet" src={bulletImg} />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        variant: "normalText"
                                    }}
                                    primary={outcome}>
                                </ListItemText>

                            </ListItem>
                        </Fade>

                    )
                })}
            </List>
        </Box>
    )
}