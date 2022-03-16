import Backdrop from "@mui/material/Backdrop";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Fragment, useEffect, useState } from "react";
import Img from "../../models/Img";
import ImageComp from "./ImageComp";
import styles from './utils.module.css';



export default function ImageGroup({ images, row, finishLoading }: {
    images: Img[],
    row: number,
    finishLoading?: () => void
}) {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState<Img>({ url: "", description: "", fallback: "" });
    const [imageCount, setImageCount] = useState(0);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    }

    const openFullImage = (image: Img) => {
        setImage(image);
    }


    useEffect(() => {
        if (imageCount === images.length && finishLoading){
            finishLoading();
        }
    }, [imageCount, finishLoading, images]);

    useEffect(() => {
        if (image.url) {
            handleOpen();
        }
    }, [image]);

    return (
        <Fragment>
            <Container maxWidth="md">
                <ImageList sx={{
                    overflowX: "hidden"
                }} variant="masonry" cols={row} gap={15}>
                    {images.map(image =>
                        <ImageListItem key={image.url}>
                            <img
                                onLoad={() => {
                                    setImageCount(prev => prev + 1);
                                }}
                                onClick={() => {
                                    openFullImage(image);
                                }} className={styles['preview']} src={image.url} srcSet={image.url} alt="preview" loading="lazy" />
                        </ImageListItem>)}
                </ImageList>
            </Container>


            <Backdrop open={open} onClick={handleClose}>
                <ImageComp image={image} className={styles['image-backdrop']} />
            </Backdrop>
        </Fragment>
    )
}