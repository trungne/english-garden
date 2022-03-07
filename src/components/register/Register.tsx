import styles from './register.module.css';
import backgroundImage from './static/registerbackground.png';
import step1 from './static/step1.png';
import step2 from './static/step2.png';
import step3 from './static/step3.png';
import step4 from './static/step4.png';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ReactElement } from 'react';
import Link from '@mui/material/Link';
import Menu from '../menu/Menu';
import React from 'react';
import { Box } from '@mui/system';



interface Item {
    content: ReactElement,
    image: string
}

const items: Item[] = [
    {
        content: <Typography variant="normalText">
            Truy cập <Link underline="hover" color="primary" href="https://forms.gle/XsaVLK5TtXsNvURx9" target="_blank" rel="noreferrer">link</Link> và điền thông tin
        </Typography>,
        image: step1
    },
    {
        content: <Typography variant="normalText">
            Đọc hướng dẫn và làm bài kiểm tra
        </Typography>,
        image: step2
    }, {
        content: <Typography variant="normalText">
            Đặt lịch kiểm tra kỹ năng Nói
        </Typography>,
        image: step3
    }, {
        content: <Typography variant="normalText">
            Nhận kết quả qua Messenger/Zalo/Email trong vòng 2-3 ngày
        </Typography>,
        image: step4
    },
]

export default function Register() {
    return (
        <Box sx={{
            "&:before": {
                position: "absolute",
                content: '""',
                width: "100%",
                height: "100%",
                
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                opacity: 0.6,
                filter: "brightness(80%)",
            }
        }} className={styles["register"]}>
            <Menu />
            <Container maxWidth="md" sx={{
                display: "flex",
                flexGrow: "1",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",

            }} >
                <Typography variant="largeText">
                    Kiểm tra đầu vào
                </Typography>
                <Timeline>
                    {items.map((item, idx) => {
                        return (
                            <TimelineItem sx={{
                                // remove padding-left
                                "::before": {
                                    content: "none",
                                },
                                flexGrow: 1
                            }} key={idx}>
                                <TimelineSeparator>
                                    <TimelineDot sx={{
                                        width: "50px",
                                        height: "50px",
                                        backgroundImage: `url(${item.image})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundColor: "#a4d183",
                                    }}>
                                    </TimelineDot>

                                    {idx < items.length - 1 && <TimelineConnector sx={{
                                        backgroundColor: "#a4d183",
                                    }} />}

                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant="normalText">
                                        {item.content}
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                        )
                    })}

                </Timeline>
            </Container>
        </Box>

    )
}