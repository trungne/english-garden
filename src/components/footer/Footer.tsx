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
import { Container } from '@mui/material';
interface ContactItem {
    name: string,
    url: string,
    image: Img,
}

const contacts: ContactItem[] = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/englishgardenVietNam",
        image: {
            url: fbLogo,
            fallback: fbLogoFallback,
            description: "Facebook"
        }
    },
    {
        name: "Tiktok",
        url: "",
        image: {
            url: tiktokLogo,
            fallback: tiktokLogoFallback,
            description: "Tiktok"
        }
    },

]

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
            <Container sx={{height: "100%"}} maxWidth="md">
                <Box className={styles['contact-layout']}>
                    {contacts.map((contact, idx) => {
                        return (
                            <ImageComp key={idx} className={styles['contact']} image={contact.image}/>
                        )
                    })}
                </Box>

            </Container>


        </Box>
    )
}