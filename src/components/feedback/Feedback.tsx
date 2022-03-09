import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from "@mui/material/Container";

import { Fade } from "react-awesome-reveal";
import Heading from "../utils/Heading";
import styles from './feedback.module.css';

import feedback from "./feedbackdata";
import ImageComp from "../utils/ImageComp";
import { Fragment } from "react";
import ImageGroup from '../utils/ImageGroup';


export default function Feedback() {
    return (
        <Fragment>
            <Fade style={{ width: "100%" }}>
                <Heading content="Hạt Mầm" />
            </Fade>

            <ImageGroup images={feedback.map(f => f.url)} />

        </Fragment>

    )
}