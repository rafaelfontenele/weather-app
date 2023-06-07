
export const ForecastItem = ( { data, scale } ) => {

    const info = {
        epoch: data.date_epoch,
        date: new Date(data.date_epoch * 1000),
        minTemp: data.day[`mintemp_${scale}`],
        maxTemp: data.day[`maxtemp_${scale}`],
        avgTemp: data.day[`avgtemp_${scale}`],
        text: data.day.condition.text,
        iconUrl: `./public/${data.day.condition.icon.split('/').splice(-2).join('/')}`,
    }

    //  split('/').splice(-2).join('')

    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const scaleDisplay = scale.toUpperCase() + 'º';

    return (

        <div className="forecast-item"> 
        
        <div className="date-day"> {day[info.date.getDay()]} </div>

        <div className="icon-display">

        <img src={info.iconUrl} className='icon-img' alt="" />
        <div className="icon-text">{info.text}</div>

        </div>


        <div className="temp">

            <div className="min-temp">Min  {info.minTemp} {scaleDisplay}  </div>        
            <div className="max-temp">Max  {info.maxTemp} {scaleDisplay}</div>
            <div className="avg-temp">Avg  {info.avgTemp} {scaleDisplay}</div>

        </div>

        </div>
            
    )
}