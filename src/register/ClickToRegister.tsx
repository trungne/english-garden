import { Container, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
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

export default function ClickToRegister() {
    const navigate = useNavigate();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        images.forEach(image => {
            new Image().src = image;
            console.log(`loaded ${image}`);
        });
        if (ref.current){
            console.log("enable animation")
            ref.current.classList.add(styles['register-button-animation']);
        }
    }, []);

    return (
        <Container sx={{ 
            display: "flex", 
            justifyContent: "center" ,
            backgroundColor: "#c2c2c2",
            borderRadius: "20px",
            }} maxWidth="sm">
            <div ref={ref} onClick={() => {
                navigate("/register");
            }} className={styles['register-button']}>
                <img alt="Click to register" src={registerButton1}/>
                <Typography variant="normalText">
                    Nhấn để đăng ký
                </Typography>
            </div>
        </Container>

    )
}