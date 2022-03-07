import styles from './loading.module.css';

import loadingGifFallback from './static/loading.gif';
import loadingGif from './static/loading.webp';

import { SyntheticEvent } from 'react';

export default function Loading() {

    const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
        if (e.currentTarget.src !== loadingGifFallback) {
            e.currentTarget.src = loadingGifFallback;
        }
    }

    return (
        <div className={styles['loading-screen-layout']}>
            <img className={styles['loading-screen-image']} src={loadingGif} onError={handleError} alt="loading" />
        </div>
    )
}