import styles from './loading.module.css';
import loadingImg1 from './static/loadingscreen1.png';
import loadingImg2 from './static/loadingscreen2.png';
import loadingImg3 from './static/loadingscreen3.png';
import loadingImg4 from './static/loadingscreen4.png';
import loadingImg5 from './static/loadingscreen5.png';
import loadingImg6 from './static/loadingscreen6.png';
import loadingImg7 from './static/loadingscreen7.png';
import loadingImg8 from './static/loadingscreen8.png';
import loadingImg9 from './static/loadingscreen9.png';
import loadingImg10 from './static/loadingscreen10.png';
import loadingImg11 from './static/loadingscreen11.png';
import loadingImg12 from './static/loadingscreen12.png';
import loadingImg13 from './static/loadingscreen13.png';

import CircularProgress from '@mui/material/CircularProgress';
import { forwardRef, RefObject, useCallback, useEffect, useRef, useState } from 'react';

const images = [
    loadingImg1, loadingImg2, loadingImg3, loadingImg4, loadingImg5, loadingImg6, loadingImg7,
    loadingImg7, loadingImg8, loadingImg9, loadingImg10, loadingImg11, loadingImg12, loadingImg13
]

const LoadingSeed = forwardRef<HTMLImageElement>(
    (props, ref) => {
        return (
            <div className={styles['loading-screen']}>
                <img ref={ref} className={styles['loading-screen-image']} src={loadingImg1} alt="loading" />
            </div>
        )
})

function LoadingScreen() {
    return (
        <CircularProgress />
    )
}

const animationDuration = 900; // ms
const timeoutFunctionIds: any[] = [];
 
export default function Loading() {
    const [imagesLoaded, setLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);
    const clearAnimationQueued = useCallback(() => {
        timeoutFunctionIds.forEach(id => {
            clearTimeout(id);
        });
    }, []);

    useEffect(() => {
        if (!imagesLoaded || !imgRef.current) {
            return;
        }

        for(let i = 1; i < images.length; i++){
            const delay = (i - 1) * (animationDuration / images.length);
            const id = setTimeout(() => {
                imgRef.current!.src = images[i];
            }, delay);
            timeoutFunctionIds.push(id);
        }

        return clearAnimationQueued;

    }, [imagesLoaded, clearAnimationQueued]);

    useEffect(() => {
        images.forEach(image => {
            new Image().src = image;
        })
        setLoaded(true);
    }, [])
    return (
        <div className={styles['loading-screen-layout']}>
            {imagesLoaded ? <LoadingSeed ref={imgRef}/> : <LoadingScreen />}
        </div>

    )
}