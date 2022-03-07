import { Container, Typography } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './register.module.css';
import reigsterButtonBase from './static/registerbutton1.png';
import registerButton from './static/loading.webp';
import registerButtonFallback from './static/loading.gif';



export default function ClickToRegister() {
    const navigate = useNavigate();
    const [animationEnabled, setAnimationEnable] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    const startAnimation = useCallback(() => {
        if (!imgRef.current) {
            return;
        }

        imgRef.current.src = registerButton;
        imgRef.current.onerror = () => {
            if (!imgRef.current) {
                return;
            }

            if (imgRef.current.src !== registerButtonFallback) {
                imgRef.current.src = registerButtonFallback
            }
        }
    }, []);

    const stopAnimation = useCallback(() => {
        if (!imgRef.current) {
            return;
        }

        imgRef.current.src = reigsterButtonBase;
        imgRef.current.onerror = null;
    }, []);

    // handle animation when cursor is over div
    useEffect(() => {
        if (animationEnabled) {
            startAnimation();
        }
        else {
            stopAnimation();
        }

    }, [animationEnabled, startAnimation, stopAnimation])


    return (
        <Container sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#c2c2c2",
            borderRadius: "20px",
        }} maxWidth="sm">
            <div onMouseEnter={() => { setAnimationEnable(true) }} onMouseLeave={() => { setAnimationEnable(false) }} onClick={() => {
                navigate("/register");
            }} className={styles['register-button']}>
                <img ref={imgRef} className={"click-to-register"} alt="Click to register" src={reigsterButtonBase} />

                <Typography variant="normalText">
                    Nhấn để đăng ký
                </Typography>
            </div>
        </Container>

    )
}