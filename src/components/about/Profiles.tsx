import styles from "./about.module.css";
import trungAvatar from './static/trung.png';
import haAvatar from './static/ha.png';
import background from './static/profiles_background.png';

import Box from "@mui/system/Box";
import Container from "@mui/material/Container";
import { Fade } from "react-awesome-reveal";
import { Fragment } from "react";
import Heading from "./Heading";


interface profileProps {
    avatarUrl: string,
    name: string,
    descriptions: string[],
}

// TODO: create a function that loads teacher profiles instead of hardcode
const profiles: profileProps[] = [
    {
        name: "Hà",
        avatarUrl: haAvatar,
        descriptions: ["8.0 IELTS", "Can use chopsticks"]
    },
    {
        name: "Trung",
        avatarUrl: trungAvatar,
        descriptions: ["8.0 IELTS", "Can't use chopsticks"]
    },

]

function Avatar({ avatarUrl, name, descriptions }: profileProps) {

    return (
        <div className={styles['avatar']} >
            <Fade damping={0.1} direction="down">
                <img alt={`${name}'s pretty avatar`} src={avatarUrl} />
            </Fade>
        </div>
    )
}

export default function Profiles() {

    return (
        <Fragment>
            <Fade>
                <Heading content="Người làm vườn" />
            </Fade>
            <Container sx={{
            }} className={styles['profiles']} maxWidth="md">
                <Box sx={{
                    '&:before': {
                        backgroundImage: `url(${background})`,
                    }
                }} className={styles['avatars-layout']}>

                    {profiles.map((profile, idx) => {
                        return (
                            <Avatar {...profile} key={idx} />
                        )
                    })}
                </Box>
            </Container>
        </Fragment>

    )
}