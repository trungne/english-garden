import { useState } from "react";

const useHovering = (initialValue: boolean) => {
    const [isHovering, setIsHovering] = useState(initialValue);

    const handleMouseOver = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }
    
    return [isHovering, handleMouseOver, handleMouseLeave] as const;
}

export default useHovering;