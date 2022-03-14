import styles from './footer.module.css';
import footerImg from './static/footer.webp';
import footerImgFallback from './static/footer.png';
import Box from '@mui/system/Box';

import ImageComp from '../utils/ImageComp';

import fbLogo from './static/facebook.webp';
import fbLogoFallback from './static/facebook.png';
import tiktokLogo from './static/tiktok.webp';
import tiktokLogoFallback from './static/tiktok.png';

import Img from '../../models/Img';
import { Divider, Typography } from '@mui/material';
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
        url: "",
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

export default function Footer() {
    return (
        <Box className={styles['footer']}>
            <ImageComp image={{
                url: footerImg,
                description: "footer",
                fallback: footerImgFallback
            }}
                className={styles['footer-image']}
            />

            <Box className={styles['contact-layout']}>
                <Box className={styles['address-phone']}>
                    <Box className={styles['address']}>
                        <Typography
                            textAlign="center" variant="smallText">
                            Địa chỉ: Thanh Đa, Bình Thạnh, TP. HCM
                        </Typography>
                    </Box>
                    <Box className={styles['phone-number']}>
                        <Typography
                            textAlign="center" variant="smallText" component="div">
                            091 589 68 06 (Hà)

                        </Typography>

                        <Typography
                            textAlign="center" variant="smallText" component="div">
                            093 919 8601 (Trung)
                        </Typography>
                    </Box>
                </Box>

                <Divider
                    variant="inset"
                    sx={{
                        zIndex: "2",
                        borderColor: "rgba(0, 0, 0, 0.5)",
                        margin : "0 0 0 0",
                    }}
                    orientation='vertical' flexItem />
                <Box className={styles['social-media']}>
                    {contacts.map((contact, idx) => {
                        return (
                            <ImageComp
                                onClick={contact.onClick}
                                style={contact.name === "Tiktok" ? {
                                    borderRadius: "50%",
                                    backgroundColor: "grey"
                                } : undefined}
                                key={idx}
                                className={styles['social-media-item']}
                                image={contact.image} />
                        )
                    })}
                </Box>
            </Box>
        </Box>
    )
}