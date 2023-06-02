import { useState } from 'react';
import { Current } from './Current';
import { Forecast } from './Forecast';


export const Display = ( {data, darkTheme} ) => {
    const darkClass = darkTheme ? 'dark' : null;
    return (
<>
        {(data == undefined) && ( //NO SEARCH INPUT
            <div className={`no-data-display ${darkClass}`}>Select a place to display</div>
        )}

        {(data == -1) && ( //INVALID SEARCH INPUT
            <div className={`wrong-input-display ${darkClass}`}>Location not found</div>
        )}

        {data && ( 
                <div className="display">
                <Current currentData={data.current ? data.current : null} darkClass={darkClass} />
                <Forecast forecastData={data.forecast ? data.forecast : null} darkClass={darkClass} />
                </div>
        )}  

</>

    )

}