import { ForecastItem } from './ForecastItem'

export const Forecast = ( {forecastData, darkClass} ) => {
    console.log(forecastData);
    return (
        <div className={`forecast-display ${darkClass}`}>FORECAST 
        


        </div>
    )
}