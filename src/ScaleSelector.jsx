import { useState } from 'react';

export const ScaleSelector = ( { darkTheme, isCelsius, setIsCelsius } ) => {
    const currIcon = `url("../public/${isCelsius ? 'c' : 'f'}-${darkTheme ? 'light' : 'dark'}.svg")`

    return ( 
        <div className="scale-selector">

            <button className='scale-toggle' style={ {backgroundImage: currIcon,
            border: darkTheme ? '2px solid white' : '2px solid black',
            backgroundColor: darkTheme ? 'transparent' : null } } onClick={() => setIsCelsius( prev => !prev )}></button>

        </div>

    )
}