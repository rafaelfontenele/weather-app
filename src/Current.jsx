

export const Current = ( {current, location, darkClass, scale} ) => {
    const info = {
        name: location.name,
        country: location.country,
        region: location.region,
        localTime: location.localtime,
        condition: current.condition.text,
        temp: current[`temp_${scale}`],
        feelsLike: current[`feelslike_${scale}`],
        iconUrl: `${current.condition.icon.split('/').splice(-2).join('/')}`,
        humidity: current.humidity,
        cloud: current.cloud,
        windSpeed: current[`wind_${scale == 'c' ? 'k' : 'm'}ph`],
        windDir: current.wind_dir,

    };
    const display = { scale: `${scale.toUpperCase()}º`,
    wind: `${ scale == 'c' ? 'kph' : 'mph'}`,
    
}

    return (

        <div className={`current-display ${darkClass}`}>

        <div className="top">
            <div className="name">{info.name.split(' ').slice(0,2).join(' ')}, <div className="country">{info.country}</div> </div>
        </div>



        <div className="info-display">

            <div className="label">Cloud</div> <div className="cloud">{info.cloud}%</div>
            <div className="label">Humidity</div><div className="humidity"> {info.humidity}%</div>
            <div className="label">Wind</div><div className="wind-speed"> {info.windSpeed}{display.wind} - {info.windDir}</div>

        </div>

        <div className="current-temp-display">


            <div className="temp">  {info.temp} {display.scale}</div>
            <div className="feels-like"> <span> Feels like</span> {info.feelsLike} {display.scale}</div>
            <div className="text">{info.condition}</div>
            <img src={info.iconUrl} alt="Icon" />


        </div>




        </div>

    )
}