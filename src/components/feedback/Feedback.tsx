import { Fade } from "react-awesome-reveal";
import Heading from "../utils/Heading";
import styles from './feedback.module.css';

import ImageGroup from '../utils/ImageGroup';
import Box from "@mui/system/Box";
import { useCallback, useContext, useEffect, useState } from "react";
import FirebaseContext from "../../firebase/context";
import Img from "../../models/Img";
import Skeleton from '@mui/material/Skeleton';
import { Container } from "@mui/material";


export default function Feedback() {
    const firebaseContext = useContext(FirebaseContext);
    const [feedbacks, setFeedbacks] = useState<Img[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const finishLoading = useCallback(() => {
        setImagesLoaded(true);
    }, [])
    useEffect(() => {
        if (!firebaseContext) {
            return;
        }

        firebaseContext.getFeedbacks().then(
            (res) => {
                const fb: Img[] = [];
                for (let url of res) {
                    fb.push({
                        url: url,
                        description: "feedback"
                    })
                }
                setFeedbacks(fb);
            }
        );
    }, [firebaseContext])
    return (
        <Box className={styles['feedback']}>
            <Fade style={{ width: "100%" }}>
                <Heading content="Hạt Mầm" />
            </Fade>
            <Container maxWidth="lg">
                {feedbacks.length === 0 && imagesLoaded ?
                    <Skeleton  height="40vh" /> :
                    <ImageGroup finishLoading={finishLoading} row={3} images={feedbacks} />}
            </Container>
        </Box>

    )
}