import styles from "./about.module.css";
import trungAvatar from './static/trung.png';
import haAvatar from './static/ha.png';
import background from './static/profiles_background.png';

import Box from "@mui/system/Box";
import Container from "@mui/material/Container";
import { Fade } from "react-awesome-reveal";
import { Fragment } from "react";
import Heading from "../utils/Heading";
import ImageComp from "../utils/ImageComp";
import Img from "../../models/Img";


interface profileProps {
    image: Img,
    name: string,
}

// TODO: create a function that loads teacher profiles instead of hardcode
const profiles: profileProps[] = [
    {
        name: "Hà",
        image : {
            url: haAvatar,
            description: "Hà's pretty avatar"
        }
    },
    {
        name: "Trung",
        image : {
            url: trungAvatar,
            description: "Trung's pretty avatar"
        }
    },

]

function Avatar({ image, name }: profileProps) {

    return (
        <div className={styles['avatar']} >
            <Fade damping={0.1} direction="down">
                <ImageComp image={image}  />
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