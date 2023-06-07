import { ForecastItem } from './ForecastItem'

export const Forecast = ( {forecastData, darkClass, isCelsius } ) => {


    return (
        <div className={`forecast-display ${darkClass}`}> 


        <div className="title">FORECAST</div>
       
        {Object.keys(forecastData.forecastday).map( k => {
            const dailyData = forecastData.forecastday[k];
            return (
                <ForecastItem data={dailyData} key={crypto.randomUUID()} scale={isCelsius ? 'c' : 'f'} />
            )
        })}

        </div>
    )
}