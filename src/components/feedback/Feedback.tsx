import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from "@mui/material/Container";

import { Fade } from "react-awesome-reveal";
import Heading from "../utils/Heading";
import styles from './feedback.module.css';

import feedback from "./feedbackdata";
import ImageComp from "../utils/ImageComp";
import { Fragment } from "react";


export default function Feedback() {
    return (
        <Fragment>
            <Fade style={{ width: "100%" }}>
                <Heading content="Hạt Mầm" />
            </Fade>
            <Container maxWidth="md" className={styles['feedback']}>


                <ImageList
                    variant="masonry"
                    cols={3}
                >
                    {feedback.map((f) => (
                        <ImageListItem key={f.url} cols={1} rows={1}>
                            <ImageComp className={styles['feedback-img']} image={f} />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Container>
        </Fragment>

    )
}