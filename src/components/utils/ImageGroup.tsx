import Backdrop from "@mui/material/Backdrop";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Fragment, useEffect, useState } from "react";

import styles from './utils.module.css';

export default function ImageGroup({ images }: { images: string[] }) {
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
    }, [image]);

    return (
        <Fragment>
            <Container maxWidth="md">
                <ImageList sx={{
                    overflowX: "hidden"
                }} variant="masonry" cols={2} gap={10}>
                    {images.map(item => <ImageListItem key={item}>
                        <img onClick={() => {
                            openFullImage(item);
                        }} className={styles['preview']} src={item} srcSet={item} alt="preview" loading="lazy" />
                    </ImageListItem>)}
                </ImageList>
            </Container>


            <Backdrop open={open} onClick={handleClose}>
                <img style={{
                    height: "80%",
                    width: "80%",
                    objectFit: "contain"
                }} src={image} alt="full" />
            </Backdrop>
        </Fragment>
    )
}