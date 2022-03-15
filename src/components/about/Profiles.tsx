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
            "7.5 IELTS (Speaking: 8.0, Listening: 8.0)",
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
        description: 'Tiếng Anh được truyền đạt tốt nhất khi là sản phẩm phụ. Đây là lý do tại sao chúng ta thường học Tiếng Anh nhiều hơn từ phim ảnh, truyện tranh và games. Trong lớp học của mình, học viên sẽ được tiếp cận đa dạng chủ đề trong cuộc sống và với vai trò là người làm vườn, mong là mình có thể "vô tình" gieo mầm sản phẩm phụ.',
        qualifications: ["8.0 IELTS (Speaking: 8.0, Listening: 9.0)"],

    },

]

function Profile({ image, name, description, qualifications }: profileProps) {

    return (
        <Grid spacing={4} container className={styles['profile']} >
            <Grid spacing={4} sm={12} lg={3} container direction="column">
                <Grid item>
                    <Fade damping={0.1}>
                        <Typography textAlign="center" component="div" variant="homeSmall">
                            {name}
                        </Typography>
                    </Fade>

                </Grid>
                <Grid item>
                    <Fade className={styles['profile-avatar']} damping={0.1} >
                        <ImageComp image={image} />
                    </Fade>
                </Grid>

                <Grid item>
                    <Fade damping={0.1} className={styles['profile-qualification-layout']}>
                        {qualifications.map((q, idx) => {
                            return <Typography
                                variant="smallText"
                                textAlign="center" key={idx} className={styles['profile-qualification']} >
                                {q}
                            </Typography>
                        })}
                    </Fade>

                </Grid>
            </Grid>

            <Grid sm={12} lg={8} item>
                <Fade damping={0.1} className={styles['profile-description-layout']}>
                    <Typography component="div" className={styles['profile-description']} variant="normalText">
                        {description}
                    </Typography>
                </Fade>
            </Grid>
        </Grid>
    )
}

export default function Profiles() {

    return (
        <Fragment>
            <Fade>
                <Heading content="Người làm vườn" />
            </Fade>
            <div className={styles['profiles']}>
                <Container maxWidth="xl">
                    <Box className={styles['avatars-layout']}>
                        {profiles.map((profile, idx) => {
                            return (
                                <Fragment>
                                    <Profile {...profile} key={idx} />
                                    {idx !== profiles.length - 1 && <Divider sx={{ zIndex: 1,
                                    marginTop: "2em",
                                    marginBottom: "2em" }} flexItem />}
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