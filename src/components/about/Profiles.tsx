import styles from "./about.module.css";
import trungAvatar from './static/trung.webp';
import trungAvatarFallback from './static/trung.png';
import haAvatar from './static/ha.webp';
import haAvatarFallback from './static/ha.png';

import background from './static/profiles_background.webp';
import backgroundFallback from './static/profiles_background.png';

import Box from "@mui/system/Box";
import Container from "@mui/material/Container";
import { Fade } from "react-awesome-reveal";
import { Fragment } from "react";
import Heading from "../utils/Heading";
import ImageComp from "../utils/ImageComp";
import Img from "../../models/Img";
import { Divider, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';


interface profileProps {
    image: Img,
    name: string,
    description: string,
    qualifications: string[],
}

// TODO: create a function that loads teacher profiles instead of hardcode
const profiles: profileProps[] = [
    {
        name: "Hà",
        image: {
            url: haAvatar,
            description: "Hà's pretty avatar",
            fallback: haAvatarFallback,
        },
        description: "Trong mỗi cái cây đều có chứa hạt giống, và trong mỗi hạt giống bé xíu đều có trong nó một cái cây lớn hơn đang thành hình. Chúng ta đều chứa những mầm khả năng để làm điều mình muốn, nếu đủ kiên trì và không ngừng đào bới khu vườn của mình.",
        qualifications: [
            "IELTS Overall 7.5 (Speaking: 8.0, Listening: 8.0)",
            "Dạy học chuẩn quốc tế với bằng TESOL/TELF"
        ]
        ,
    },
    {
        name: "Trung",
        image: {
            url: trungAvatar,
            description: "Trung's pretty avatar",
            fallback: trungAvatarFallback,
        },
        description: 'Tiếng Anh được truyền đạt tốt nhất khi dưới vai trò là sản phẩm phụ. Tức là trong quá trình tìm hiểu về những chủ đề khác, ta sẽ dễ "vô tình" tiếp thu Tiếng Anh. Đây là lý do tại sao ta thường thấy bản thân học Tiếng Anh nhiều hơn từ phim ảnh, truyện tranh và games. Trong lớp học của mình, học viên sẽ được tiếp cận đa dạng chủ đề trong cuộc sống và với vai trò là người trồng vườn, mong là mình có thể "vô tình"  gieo mầm sản phẩm phụ.',
        qualifications: ["IELTS Overall 8.0 (Speaking: 8.0, Listening: 9.0"],

    },

]

function Profile({ image, name, description, }: profileProps) {

    return (
        <div className={styles['profile']} >
            <Fade damping={0.1} direction="down">
                <ImageComp image={image} />
            </Fade>
            <Typography className={styles['profile-description']} variant="normalText">
                {description}
            </Typography>
        </div>
    )
}

export default function Profiles() {

    return (
        <Fragment>
            <Fade>
                <Heading content="Người làm vườn" />
            </Fade>
            <div className={styles['profiles']}>
                <Container maxWidth="lg">
                    <Box className={styles['avatars-layout']}>
                        {profiles.map((profile, idx) => {
                            return (
                                <Fragment>
                                    <Profile {...profile} key={idx} />
                                    {idx !== profiles.length - 1 && <Divider sx={{ zIndex: 1 }} flexItem />}
                                </Fragment>
                            )
                        })}
                    </Box>
                </Container>
                <ImageComp image={{
                    url: background,
                    description: "avatars background",
                    fallback: backgroundFallback
                }}
                    className={styles['avatars-layout-background']}
                />
            </div>

        </Fragment>

    )
}