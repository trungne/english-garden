import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import styles from './register.module.css';
import reigsterButtonBase from './static/registerbutton1.png';
import registerButton from './static/loading.webp';
import registerButtonFallback from './static/loading.gif';
import useHovering from '../../hooks/useHovering';
import ImageComp from '../utils/ImageComp';
import { useMemo } from 'react';

export default function ClickToRegister() {
    const [isHovering, handleMouseOver, handleMouseLeave] = useHovering(false);
    const navigate = useNavigate();
    const gif = useMemo(() => {
        return (
            <ImageComp image={{ url: registerButton, description: "Click to register", fallback: registerButtonFallback }} />
        )
    }, []);

    const still = useMemo(() => {
        return (
            <ImageComp image={{ url: reigsterButtonBase, description: "Click to register", fallback: "" }} />
        )
    }, [])
    return (
        <Container sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#c2c2c2",
            borderRadius: "20px",
        }} maxWidth="sm">
            <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} onClick={() => {
                navigate("/register");
            }} className={styles['register-button']}>
                {isHovering
                    ? gif
                    : still
                }

                <Typography variant="normalText">
                    Nhấn để đăng ký
                </Typography>
            </div>
        </Container>
    )
}