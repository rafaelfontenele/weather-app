import { useState, useEffect } from 'react'
import './App.css'
import { ThemeSelector } from './ThemeSelector';
import { ScaleSelector } from './ScaleSelector';
import { Display } from './Display';
import { startKeyPressListener } from './utils/keyPress'
import { API } from './API.js';


function App() {
    const exampleData = {
      "location": {
          "name": "London",
          "region": "City of London, Greater London",
          "country": "United Kingdom",
          "lat": 51.52,
          "lon": -0.11,
          "tz_id": "Europe/London",
          "localtime_epoch": 1685588306,
          "localtime": "2023-06-01 3:58"
      },
      "current": {
          "temp_c": 10.0,
          "temp_f": 50.0,
          "is_day": 0,
          "condition": {
              "text": "Overcast",
              "icon": "//cdn.weatherapi.com/weather/64x64/night/122.png",
              "code": 1009
          },
          "wind_mph": 13.6,
          "wind_kph": 22.0,
          "wind_dir": "ENE",
          "humidity": 82,
          "cloud": 100,
          "feelslike_c": 8.3,
          "feelslike_f": 46.9,
          "uv": 1.0
      },
      "forecast": {
          "forecastday": [
              {
                  "date": "2023-06-01",
                  "date_epoch": 1685577600,
                  "day": {
                      "maxtemp_c": 22.5,
                      "maxtemp_f": 72.5,
                      "mintemp_c": 8.3,
                      "mintemp_f": 46.9,
                      "avgtemp_c": 14.5,
                      "avgtemp_f": 58.1,
                      "maxwind_mph": 13.9,
                      "maxwind_kph": 22.3,
                      "totalprecip_mm": 0.0,
                      "totalprecip_in": 0.0,
                      "totalsnow_cm": 0.0,
                      "daily_will_it_rain": 0,
                      "daily_chance_of_rain": 0,
                      "daily_will_it_snow": 0,
                      "daily_chance_of_snow": 0,
                      "condition": {
                          "text": "Sunny",
                          "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                          "code": 1000
                      }
                  },
                  "astro": {
                      
                  },
                  "hour": [
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      }
                  ]
              },
              {
                  "date": "2023-06-02",
                  "date_epoch": 1685664000,
                  "day": {
                      "maxtemp_c": 22.5,
                      "maxtemp_f": 72.5,
                      "mintemp_c": 7.7,
                      "mintemp_f": 45.9,
                      "avgtemp_c": 14.7,
                      "avgtemp_f": 58.5,
                      "maxwind_mph": 12.3,
                      "maxwind_kph": 19.8,
                      "totalprecip_mm": 0.0,
                      "totalprecip_in": 0.0,
                      "totalsnow_cm": 0.0,
                      "daily_will_it_rain": 0,
                      "daily_chance_of_rain": 0,
                      "daily_will_it_snow": 0,
                      "daily_chance_of_snow": 0,
                      "condition": {
                          "text": "Sunny",
                          "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                          "code": 1000
                      }
                  },
                  "astro": {
                      
                  },
                  "hour": [
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      }
                  ]
              },
              {
                  "date": "2023-06-03",
                  "date_epoch": 1685750400,
                  "day": {
                      "maxtemp_c": 23.1,
                      "maxtemp_f": 73.6,
                      "mintemp_c": 7.2,
                      "mintemp_f": 45.0,
                      "avgtemp_c": 14.6,
                      "avgtemp_f": 58.3,
                      "maxwind_mph": 12.1,
                      "maxwind_kph": 19.4,
                      "totalprecip_mm": 0.1,
                      "totalprecip_in": 0.0,
                      "totalsnow_cm": 0.0,
                      "daily_will_it_rain": 0,
                      "daily_chance_of_rain": 0,
                      "daily_will_it_snow": 0,
                      "daily_chance_of_snow": 0,
                      "condition": {
                          "text": "Sunny",
                          "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                          "code": 1000
                      }
                  },
                  "astro": {
                      
                  },
                  "hour": [
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      },
                      {
                          "condition": {
                              
                          }
                      }
                  ]
              }
          ]
      }
  }

  const [isCelsius, setIsCelsius] = useState(true);
  const [data, setData] = useState(undefined);
  const [darkTheme, setDarkTheme] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [suggestedList, setSuggestedList] = useState([]);
  const api = new API();

  useEffect( () => {

    if (searchInput.length < 1) return;

    api.getSuggested(searchInput, setSuggestedList);



}, [searchInput])


  
  useEffect( () => {
    if (searchInput.length > 5) return;

    //const options = api.getSearchList(searchInput, 'SEARCH');
    //console.log(options);


  }, [searchInput])
  

  const handleInputChange = (e) => {
    const value = e.target.value;
   
    setSearchInput( prev => value)
    
  }

  startKeyPressListener((e) => handleKeyboardPress(e));
  const handleKeyboardPress = (e) => {
    const keyPressed = e.key;
    
    if (keyPressed == 'Enter') {
      search();
    }
  }
  const search = () => {
    if (searchInput == '') return;

    api.getData(searchInput, setData);


    setSearchInput( prev => '');
    setSuggestedList( prev => [])
  }




  return (
    <>

    <div className={`wrapper ${darkTheme ? 'dark' : null}`} style={ {backgroundImage: `url("${darkTheme ? 'd5' : 'l5'}.jpg")`,} }>

    <div className="header" style={ {color: darkTheme ? 'white' : 'black', backgroundColor: darkTheme ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)'} } >

    <ScaleSelector darkTheme={darkTheme} isCelsius={isCelsius} setIsCelsius={setIsCelsius}/>


      <div className={`search-bar ${darkTheme ? 'dark' : null}`}>
        <h1>Weather search</h1>
        
        <label htmlFor="search-input" id='search'>
          <input type="search" list="list"  placeholder='Insert a city/ZIP/country' 
          value={searchInput} maxLength='24' onChange={(e) => handleInputChange(e)} name='search-input'/>
          <datalist id="list">
            {suggestedList && suggestedList.map( (suggestion, index) => {
                return (
                    <option value={suggestion} onClick={() => {
                        setSearchInput(prev => suggestion);
                        search();
                    }} key={index}></option>
                )
            })}
          </datalist>
          <button name='search-input' style={ {backgroundImage: `url("search-${darkTheme ? 'light' : 'dark'}.svg")`} } className='search-btn' onClick={() => search()}></button>
        </label>
        </div>

        <ThemeSelector darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
  
    </div>


    <Display data={ data } darkTheme={darkTheme} isCelsius={isCelsius} />


    <div className="forecast">

      {}
    </div>


    </div>
    </>
  )
}

export default App
