import styles from "./courseinfo.module.css";

import { Fade } from "react-awesome-reveal";
import Typography from "@mui/material/Typography";
import ImageGroup from "../../../utils/ImageGroup";
import Img from "../../../../models/Img";


export default function CoursePreviews({ images }: { images: Img[] }) {
    return (
        <Fade triggerOnce damping={0.1} cascade>
            <div className={styles['course-previews']}>
                <Typography variant="largeText">
                    Hình ảnh từ bài học
                </Typography>
                <ImageGroup row={2} images={images} />
            </div>
        </Fade>
    )
}