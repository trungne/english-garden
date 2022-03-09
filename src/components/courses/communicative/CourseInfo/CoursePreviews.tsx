import styles from "./courseinfo.module.css";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Backdrop from '@mui/material/Backdrop';
import { Fragment, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Container, Typography } from "@mui/material";
import ImageGroup from "../../../utils/ImageGroup";


export default function CoursePreviews({ images }: { images: string[] }) {
    return (
        <Fade triggerOnce damping={0.1} cascade>
            <div className={styles['course-previews']}>
                <Typography variant="largeText">
                    Hình ảnh từ bài học
                </Typography>
                <ImageGroup images={images} />
            </div>
        </Fade>
    )
}