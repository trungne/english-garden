import bulletImg from "./static/bullet128.png";

import styles from "./courseinfo.module.css";
import Typography from '@mui/material/Typography';
import Box from "@mui/system/Box";

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from "@mui/material/List";
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
                <Typography textAlign={"center"} className={"course-outcomes-title"} variant="largeText">
                    Sau khóa học, bạn có thể:
                </Typography>


            <List className={styles['course-outcomes']}>
                {outcomes.map((outcome, idx) => {
                    return (
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
                    )
                })}
            </List>
        </Box>
    )
}