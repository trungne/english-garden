import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './register.module.css';

export default function ClickToRegister() {
    const navigate = useNavigate();
    return (
        <Container sx={{ 
            display: "flex", 
            justifyContent: "center" ,
            backgroundColor: "#9ce0e3",
            borderRadius: "20px",
            }} maxWidth="sm">
            <div onClick={() => {
                navigate("/register");
            }} className={styles['register-button']}>
                <Typography variant="normalText">
                    Nhấn để đăng ký
                </Typography>
            </div>
        </Container>

    )
}