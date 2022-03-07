import styles from "./courseinfo.module.css";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Backdrop from '@mui/material/Backdrop';
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Typography } from "@mui/material";


export default function CoursePreviews({ images }: { images: string[] }) {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState<string>("");

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    }

    const openFullImage = (url: string) => {
        setImage(url);
    }

    useEffect(() => {
        if (image) {
            handleOpen();
        }
    }, [image])

    return (
        <Fade triggerOnce damping={0.1} cascade>
            <div className={styles['course-previews']}>
                <Typography variant="largeText">
                    Hình ảnh từ bài học
                </Typography>
                <ImageList sx={{
                    maxWidth: "650px",
                    padding: "1em 1em 1em 1em",
                    height: "100%",
                    overflowX: "hidden",
                }} variant="woven" cols={2} gap={10}>
                    {images.map((item) => (
                        <ImageListItem key={item}>
                            <img

                                onClick={() => {
                                    openFullImage(item);
                                }}
                                className={styles['preview']}
                                src={item}
                                srcSet={item}
                                alt="preview"
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Backdrop open={open} onClick={handleClose}>
                    <img style={{
                        height: "80%",
                        width: "80%",
                        objectFit: "contain",
                    }} src={image} alt="full" />
                </Backdrop>
            </div>
        </Fade>

    )
}