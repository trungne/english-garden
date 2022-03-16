import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import { Fade } from "react-awesome-reveal";
import styles from './courseinfo.module.css';
import { Container } from '@mui/material';

export default function CourseDescription({ description }: { description: string }) {
    return (
        <Box className={styles['course-description']} >
            <Fade triggerOnce damping={0.1} cascade>
                <Container maxWidth="md">
                    <Typography variant="normalText" component={"div"} textAlign={"justify"}>
                        {description}
                    </Typography>
                </Container>
            </Fade>

        </Box>
    )

}