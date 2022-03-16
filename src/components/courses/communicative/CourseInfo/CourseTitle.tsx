import styles from "./courseinfo.module.css";

import Typography from '@mui/material/Typography';
import { Fade } from "react-awesome-reveal";

export default function CourseTitle({ name }: { name: string }) {
    return (
        <Fade triggerOnce damping={0.1}>
            <div className={styles['course-title-layout']}>
                <Typography component="div" textAlign="center" fontSize={"10vmin"} variant="name">
                    {name}
                </Typography>
            </div>
        </Fade>);
}