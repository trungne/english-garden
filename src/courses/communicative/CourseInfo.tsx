import styles from "./communicative.module.css";

import Typography from '@mui/material/Typography';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { createTheme } from "@mui/system";
import { ThemeProvider } from "@emotion/react";
import { Fade } from "react-awesome-reveal";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
const theme = createTheme({
    typography: {
        name: {
            color: "#581f7e",
            fontFamily: "SansterdamScript"
        }
    }
})

interface CourseProps {
    name: string,
    photoUrl: string,
    description: string,
    direction: string,
    duration: string,
    level: string,
}

function CourseOverviewItem({ icon, text }: { icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>, text: string }) {
    return (
        <div className={styles['course-overview']}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5em",
            }}>
                {icon}
                <Typography>
                    {text}
                </Typography>
            </div>
        </div>

    )
}

export default function CourseInfo({
    name,
    photoUrl,
    description,
    direction,
    duration,
    level }: CourseProps) {

    const coverStyle: React.CSSProperties = {
        backgroundImage: `url(${photoUrl})`,
    }

    const titleStyle: React.CSSProperties = {};
    titleStyle[direction === "right" ? "marginRight" : "marginLeft"] = " 50%";

    return (
        <div className={styles['course-overlay']}>
            <Fade
                damping={0.1}
                cascade
                direction={direction === "left" ? "left" : "right"}>
                <div style={coverStyle} className={styles['course-cover']}>
                    <div style={titleStyle} className={styles['course-title']}>
                        <ThemeProvider theme={theme}>
                            <Typography fontSize={"10vmin"} variant="name">
                                {name}
                            </Typography>
                        </ThemeProvider>
                    </div>
                </div>
                <CourseOverviewItem icon={MenuBookIcon} text={"A1-A2"} />
                <CourseOverviewItem icon={CalendarTodayIcon} text={"A1-A2"} />
                
                <Typography>
                    {description}
                </Typography>

            </Fade>
        </div>
    )
}