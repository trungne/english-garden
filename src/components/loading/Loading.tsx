import styles from './loading.module.css';

import loadingGifFallback from './static/loading.gif';
import loadingGif from './static/loading.webp';

import ImageComp from '../utils/ImageComp';


export default function Loading() {
    return (
        <div className={styles['loading-screen-layout']}>
            <ImageComp className={styles['loading-screen-image']} image={{url: loadingGif, description: "loading", fallback: loadingGifFallback}} />            
        </div>
    )
}