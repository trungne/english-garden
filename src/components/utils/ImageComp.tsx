import { CSSProperties, ReactEventHandler, SyntheticEvent } from "react";
import Img from "../../models/Img";

interface ImageCompProps {
    image: Img,
    className?: string,
    onLoad?: ReactEventHandler<HTMLImageElement>,
    onClick?: ReactEventHandler<HTMLImageElement>
    style?: CSSProperties,
}

export default function ImageComp(
    { image, className, onLoad, style, onClick }:
        ImageCompProps) {
    const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
        if (!!image.fallback && e.currentTarget.src !== image.fallback) {
            e.currentTarget.src = image.fallback;
        }
    }

    return (
        <img
        
            style={style}
            onClick={onClick}
            onLoad={onLoad}
            loading="lazy"
            className={className}
            src={image.url}
            onError={handleError}
            alt={image.description} />
    )
}