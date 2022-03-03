import styles from './register.module.css';
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

interface Item {
    title: string,
    image: string
}

const items: Item[] = [
    {
        title: "Truy cập link và điền thông tin",
        image: step1
    },
    {
        title: "Đọc hướng dẫn và làm bài kiểm tra",
        image: step2
    }, {
        title: "Đặt lịch kiểm tra kỹ năng Nói",
        image: step3
    }, {
        title: "Nhận kết quả qua Messenger/Zalo/Email trong vòng 2-3 ngày",
        image: step4
    },
]

export default function Register() {
    return (
        <div className={styles["register"]}>
            <Timeline>
                {items.map((item, idx) => {
                    return (
                        <TimelineItem key={idx}>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <img
                                        src={item.image}
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            objectFit: "contain"
                                        }}
                                        alt={`${item.title}'s dot illustration`} />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="normalText">
                                    {item.title}
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })}

            </Timeline>
        </div>
    )
}