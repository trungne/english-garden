import styles from "./communicative.module.css";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Backdrop from '@mui/material/Backdrop';
import { useEffect, useState } from "react";


export default function CoursePreviews({ images }: { images: string[] }) {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState<string>("");

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    const handleOpen = () => {
        setOpen(true);
    }

    const openFullImage = (url: string) => {
        setImage(url);
    }

    useEffect(() => {
        handleOpen();
    }, [image])

    return (
        <div className={styles['course-previews']}>
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
                    width: "80%"
                }} src={image} alt="image" />
            </Backdrop>
        </div>
    )
}