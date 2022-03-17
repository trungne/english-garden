import styles from './footer.module.css';
import Box from '@mui/system/Box';

import ImageComp from '../utils/ImageComp';

import fbLogo from './static/facebook.webp';
import fbLogoFallback from './static/facebook.png';
import tiktokLogo from './static/tiktok.webp';
import tiktokLogoFallback from './static/tiktok.png';

import Img from '../../models/Img';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Fragment } from 'react';

interface ContactItem {
    name: string,
    url: string,
    image: Img,
    onClick?: () => void,
}


const openLink = (link: string) => {
    Object.assign(document.createElement('a'), {
        target: '_blank',
        href: link,
        rel: 'noreferrer',
    }).click();
}

const contacts: ContactItem[] = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/englishgardenVietNam",
        image: {
            url: fbLogo,
            fallback: fbLogoFallback,
            description: "Facebook"
        },
    },
    {
        name: "Tiktok",
        url: "https://www.tiktok.com/@englishgardenvn",
        image: {
            url: tiktokLogo,
            fallback: tiktokLogoFallback,
            description: "Tiktok"
        },
    },
]
contacts[0].onClick = () => {
    openLink(contacts[0].url);
}

contacts[1].onClick = () => {
    openLink(contacts[1].url);
}

function SocialMedia() {
    return (
        <Fragment>
            {contacts.map((contact, idx) => {
                return (
                    <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} xs={12} md={6} item>
                        <ImageComp
                            onClick={contact.onClick}
                            style={contact.name === "Tiktok" ? {
                                borderRadius: "50%",
                                backgroundColor: "grey"
                            } : undefined}
                            key={idx}
                            className={styles['social-media-item']}
                            image={contact.image} />
                    </Grid>
                )
            })}
        </Fragment>
    )
}

function PhoneNumbers() {
    return (
        <Fragment>
            <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} item>
                <Typography
                    textAlign="center" variant="smallText" component="div">
                    091 589 68 06 (Hà)
                </Typography>
            </Grid>

            <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} item>
                <Typography
                    textAlign="center" variant="smallText" component="div">
                    093 919 8601 (Trung)
                </Typography>
            </Grid>
        </Fragment>
    )
}

function Address() {
    return (
        <Typography
            textAlign="center" variant="smallText">
            Địa chỉ: Thanh Đa, Bình Thạnh, TP. HCM
        </Typography>
    )
}
const horizontalDivider = <Divider
    variant="inset"
    sx={{
        zIndex: "2",
        borderColor: "rgba(0, 0, 0, 0.5)",
        margin: "0 0 0 0",
    }}
    orientation='vertical' flexItem />

export default function Footer() {

    return (
        <Box className={styles['footer']}>
            <Grid container>
                <Grid xs={9} item container>
                    <Grid className={styles['address']} xs={12} md={6} item>
                        <Address />
                    </Grid>

                    {horizontalDivider}

                    <Grid container className={styles['phone-number']} xs={12} md item>
                        <PhoneNumbers />
                    </Grid>
                </Grid>

                {horizontalDivider}

                <Grid className={styles['social-media']} xs container item>
                    <SocialMedia />
                </Grid>
            </Grid>
        </Box>
    )
}