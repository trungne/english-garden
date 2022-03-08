import styles from './footer.module.css';
import footerImg from './static/footer.webp';
import footerImgFallback from './static/footer.png';
import Box from '@mui/system/Box';

import ImageComp from '../utils/ImageComp';

import fbLogo from './static/facebook.webp';
import fbLogoFallback from './static/facebook.png';
import tiktokLogo from './static/tiktok.webp';
import tiktokLogoFallback from './static/tiktok.png';
import zaloLogo from './static/zalo.webp';
import zaloLogoFallback from './static/zalo.png';

import Img from '../../models/Img';
import { Container } from '@mui/material';
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

    // {
    //     name: "Zalo",
    //     url: "",
    //     image: {
    //         url: zaloLogo,
    //         fallback: zaloLogoFallback,
    //         description: "Tiktok"
    //     },

    // },
]
contacts[0].onClick = () => {
    openLink(contacts[0].url);
}

contacts[1].onClick = () => {
    openLink(contacts[1].url);
}

// contacts[2].onClick = () => {

// }

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
            <Container sx={{ height: "100%" }} maxWidth="md">
                <Box className={styles['contact-layout']}>
                    {contacts.map((contact, idx) => {
                        return (
                            <ImageComp
                                onClick={contact.onClick}
                                style={contact.name === "Tiktok" ? {
                                    borderRadius: "50%",
                                    backgroundColor: "grey"
                                } : undefined}
                                key={idx}
                                className={styles['contact']}
                                image={contact.image} />
                        )
                    })}
                </Box>

            </Container>


        </Box>
    )
}