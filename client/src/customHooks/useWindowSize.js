import React, {useState, useEffect}from 'react'

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    function detectWindowSize(){
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detectWindowSize);
        return () => window.removeEventListener('resize', detectWindowSize);
    }, [windowSize]); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
}


export default useWindowSize