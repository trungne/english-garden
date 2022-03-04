import Box from "@mui/system/Box";
import ComingSoon from "../../comingsoon/ComingSoon";
import styles from './ielts.module.css';

export default function Ielts() {
    return <Box className={styles['ielts']}>
        <ComingSoon />
    </Box>
}