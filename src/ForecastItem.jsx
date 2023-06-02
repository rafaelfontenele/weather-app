
export const ForecastItem = ( { data, scale } ) => {
    
    const info = {
        date: data.date,
        minTemp: data.day[`mintemp_${scale}`],
        maxTemp: data.day[`maxtemp_${scale}`],
        avgTemp: data.day[`avgtemp_${scale}`],
    }

    return (

        <div className="item" style= {{display: 'flex', gap:'5%'}}> 
        
        <div className="min-temp"> min:{info.minTemp}  </div>        
        <div className="max-temp">max: {info.maxTemp}</div>
        <div className="avg-temp">avg: {info.avgTemp}</div>
        </div>
            
    )
}