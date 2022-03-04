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
    const ref = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const [animationEnabled, setAnimationEnable] = useState(false);

    const clearAnimationsQueued = useCallback(() => {
        timeoutFunctionIds.forEach(id => {
            clearTimeout(id);
        });
        console.log("clear animations");
    }, []);

    const startAnimation = useCallback(() => {
        if (!imgRef.current) {
            return;
        }
        const duration = 1400; // ms
        console.log("start animation");

        for (let i = 1; i < images.length; i++) {
            const id = setTimeout(() => {
                if (!imgRef.current) {
                    return;
                }

                imgRef.current.src = images[i];
            }, (i - 1) * (duration / images.length));

            timeoutFunctionIds.push(id);
        }
    }, []);

    const stopAnimation = useCallback(() => {
        if (!imgRef.current) {
            return;
        }
        clearAnimationsQueued();
        imgRef.current.src = images[0];
    }, [clearAnimationsQueued]);

    

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
            <div onMouseEnter={() => { setAnimationEnable(true) }} onMouseLeave={() => { setAnimationEnable(false) }} ref={ref} onClick={() => {
                navigate("/register");
            }} className={styles['register-button']}>
                <img className={"click-to-register"} ref={imgRef} alt="Click to register" src={registerButton1} />

                <Typography variant="normalText">
                    Nhấn để đăng ký
                </Typography>
            </div>
        </Container>

    )
}