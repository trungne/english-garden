import { Typography } from '@mui/material';
import Box from '@mui/system/Box';
import { Fade } from 'react-awesome-reveal';

import Loading from '../loading/Loading';
import styles from './comingsoon.module.css';

export default function ComingSoon() {
    return (
        <Box className={styles['coming-soon']}>
            <Loading />
            <Fade>
                <Typography lineHeight={"2em"} component={"div"} textAlign={"center"} variant="home">
                    Tụi mình đang "trồng" khóa học.
                    <br />
                    Bạn đóng chờ thông báo nhé.
                </Typography>
            </Fade>
        </Box>

    )
}