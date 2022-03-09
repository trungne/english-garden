import styles from './about.module.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Fade } from 'react-awesome-reveal';
import { Fragment } from 'react';
import Heading from '../utils/Heading';
import ImageComp from '../utils/ImageComp';

import introductionBackground from './static/notebackground.webp';
import introductionBackgroundFallback from './static/notebackground.png';

const aboutUsText =
    `
Cám ơn bạn đã đến vườn để học của tụi mình. 
Như mọi khu vườn, người làm vườn đều đào bới nhằm nuôi dưỡng mầm cây của mình. 
Dưới tư cách là người làm vườn, bọn mình không lấy gì làm tự hào hơn khi có được đặc quyền trồng và chăm sóc hạt kiến thức tại khu vườn này.
Những kiến thức được nuôi trồng với niềm yêu quý mãnh liệt đối với Ngôn ngữ, đặc biệt là Ngôn Ngữ Anh, phương tiện mang mọi miền biên giới gần nhau hơn bên cạnh internet.
Đây sẽ là nơi bọn mình chia sẻ tất tần tật về Ngôn Ngữ Anh, từ những bản tin nhanh tới phương pháp tiếp cận ngôn ngữ.
Tụi mình hiểu tất cả chúng ta đều có trong lòng một sự thôi thúc để học và phát triển bản thân.
Nếu bạn đã lạc đến đây, hoặc bạn đến đây có chung một mục đích, để học, hiểu và bắt đầu một chặng đường học thuật.
Xin đừng ngần ngại nhắn tin cho bọn tớ để nói lên nguyện vọng của bạn.
Hai người bọn tớ Hà và Trung, luôn chờ có bạn đồng hành.
Không dám vỗ ngực tự xưng chúng tớ sẽ là người thầy, cô tuyệt vời nhất, nhưng với tư cách là người hướng dẫn cho các bạn, bọn mình sẽ cùng nhau đi và giải quyết những rắc rối của ngôn ngữ và khiến chặng đường thật sự xứng đáng để trải nghiệm.
`;


export default function Introduction() {
    return (
        <Fragment>
            <Fade>
                <Heading content="Chuyện Khu Vườn" />
            </Fade>

            <div className={styles['introduction']}>

                <Container sx={{
                    position: "relative",
                    height: "100%"
                }} maxWidth="md">

                    <ImageComp className={styles['introduction-background']} image={{
                        url: introductionBackground,
                        description: "note background",
                        fallback: introductionBackgroundFallback,
                    }} />
                    <Fade damping={0.1}>
                        <Typography color="#3f43a0" lineHeight={"1.5em"} component="div" gutterBottom variant='normalText' textAlign={'justify'}>
                            {aboutUsText}
                        </Typography>
                    </Fade>

                    <Container sx={{
                        display: "flex",
                        justifyContent: "center",
                        height: "100%"
                    }} maxWidth="md">
                        <Fade damping={0.1}>
                            <Typography
                                component="div"
                                gutterBottom
                                variant='signature'
                                textAlign={'center'}>
                                Hà và Trung.
                            </Typography>
                        </Fade>
                    </Container>


                </Container>

            </div>
        </Fragment>

    )
}