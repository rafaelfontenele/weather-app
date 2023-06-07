import { Current } from './Current';
import { Forecast } from './Forecast';


export const Display = ( {data, darkTheme, isCelsius} ) => {
    const darkClass = darkTheme ? 'dark' : null;
    return (
<>
        {(data == undefined) && ( //NO SEARCH INPUT
            <div className={`no-data-display ${darkClass}`}>Select a place to display</div>
        )}

        {(data == -1) && ( //INVALID SEARCH INPUT
            <div className={`wrong-input-display ${darkClass}`}>Location not found</div>
        )}

        {(data !== undefined && data !== -1) && ( 

                <div className="display">
                <Current current={data.current} location={data.location} darkClass={darkClass} scale={isCelsius ? 'c' : 'f'} />
                <Forecast forecastData={data.forecast ? data.forecast : null} darkClass={darkClass} isCelsius={isCelsius} />
                </div>

            )}
        

</>

    )

}