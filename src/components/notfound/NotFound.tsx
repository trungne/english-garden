import Typography from '@mui/material/Typography';
import Footer from '../footer/Footer';
import Menu from '../menu/Menu';
import styles from './notfound.module.css';
export default function NotFound() {
    return (
        <div className={styles['not-found']}>
            <Menu/>
            <Typography className={styles['text']} variant='largeText' textAlign={'center'} component='div'>
                Đường link không hợp lệ.
            </Typography>

            <Footer />
        </div>
    )
}