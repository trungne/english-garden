import { Fade } from "react-awesome-reveal";
import Heading from "../utils/Heading";
import styles from './feedback.module.css';

import feedback from "./feedbackdata";
import ImageGroup from '../utils/ImageGroup';
import Box from "@mui/system/Box";


export default function Feedback() {
    return (
        <Box className={styles['feedback']}>
            <Fade style={{ width: "100%" }}>
                <Heading content="Hạt Mầm" />
            </Fade>

            <ImageGroup row={4} images={feedback} />

        </Box>

    )
}