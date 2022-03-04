import { Container, Typography } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './register.module.css';
import registerButton1 from './static/registerbutton1.png';
import registerButton2 from './static/registerbutton2.png';
import registerButton3 from './static/registerbutton3.png';
import registerButton4 from './static/registerbutton4.png';
import registerButton5 from './static/registerbutton5.png';
import registerButton6 from './static/registerbutton6.png';
import registerButton7 from './static/registerbutton7.png';

const images = [registerButton1, registerButton2, registerButton3, registerButton4, registerButton5, registerButton6, registerButton7];

const timeoutFunctionIds: any[] = [];

export default function ClickToRegister() {
    const navigate = useNavigate();
    const duration = useRef(1400);
    const [animationEnabled, setAnimationEnable] = useState(false);
    const [imageIdx, setImageIdx] = useState(0);

    const clearAnimationsQueued = useCallback(() => {
        timeoutFunctionIds.forEach(id => {
            clearTimeout(id);
        });
    }, []);

    const startAnimation = useCallback(() => {
        if (imageIdx !== images.length - 1) {
            const id = setTimeout(() => {
                setImageIdx(prev => {
                    return prev + 1;
                });
            }, duration.current / images.length);
            timeoutFunctionIds.push(id);
        }
    }, [imageIdx]);

    const stopAnimation = useCallback(() => {
        setImageIdx(0);
    }, []);

    // preload images
    useEffect(() => {
        images.forEach(image => {
            new Image().src = image;
        });
    }, []);

    // handle animation when cursor is over div
    useEffect(() => {
        if (animationEnabled) {
            startAnimation();
        }
        else {
            stopAnimation();
        }

        return (clearAnimationsQueued);
    }, [animationEnabled, startAnimation, stopAnimation, clearAnimationsQueued])


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
                <img className={"click-to-register"} alt="Click to register" src={images[imageIdx]} />

                <Typography variant="normalText">
                    Nhấn để đăng ký
                </Typography>
            </div>
        </Container>

    )
}