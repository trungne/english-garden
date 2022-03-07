import styles from './about.module.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Fade } from 'react-awesome-reveal';
import { Fragment } from 'react';
import Heading from '../utils/Heading';
const aboutUsText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non odio in nunc fringilla dapibus non id erat. Morbi vulputate arcu eget ipsum faucibus, eu lacinia neque ornare. Ut laoreet accumsan volutpat. Quisque ut lorem sit amet elit dapibus mollis a nec tellus. Quisque pharetra velit molestie massa tincidunt tincidunt. Aliquam erat volutpat. Nam pretium ligula eros, vitae vulputate libero imperdiet in. Quisque efficitur at velit sit amet cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris fringilla justo nec velit luctus, eu tincidunt enim dignissim. Vivamus elementum justo a dolor aliquet tristique. Suspendisse tristique velit tellus, non tempus ligula consectetur ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur cursus erat ac tincidunt ultricies. Proin dignissim nunc sit amet urna ullamcorper, quis varius arcu pellentesque.";


export default function Introduction() {
    return (
        <Fragment>
            <Fade>
                <Heading content="Chuyện Khu Vườn" />
            </Fade>

            <div className={styles['introduction']}>
                <Container sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%"
                }} maxWidth="md">
                    <Fade damping={0.1}>
                        <Typography component="div" gutterBottom variant='normalText' textAlign={'justify'}>
                            {aboutUsText}
                        </Typography>
                    </Fade>
                </Container>

            </div>
        </Fragment>

    )
}