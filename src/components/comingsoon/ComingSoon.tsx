import { Typography } from '@mui/material';
import Box from '@mui/system/Box';
import { Fragment } from 'react';
import { Fade } from 'react-awesome-reveal';
import Footer from '../footer/Footer';

import Loading from '../loading/Loading';
import styles from './comingsoon.module.css';

export default function ComingSoon() {
    return (
        <Fragment>
            <Box className={styles['coming-soon']}>
                <Loading />
                <Fade>
                    <Typography lineHeight={"2em"} component={"div"} textAlign={"center"} variant="home">
                        Tụi mình đang "trồng" khóa học.
                        <br />
                        Bạn đón chờ thông báo nhé.
                    </Typography>
                </Fade>
                <Footer />
            </Box>
        </Fragment>


    )
}