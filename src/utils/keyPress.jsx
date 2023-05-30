import { useEffect } from 'react';


export const startKeyPressListener = (callbackFunc) => {

    useEffect( () => {        
        
        window.addEventListener('keydown', callbackFunc);

        return () => {
            window.removeEventListener('keydown', callbackFunc)
        }


    }, [callbackFunc])

    
}