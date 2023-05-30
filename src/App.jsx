import { useState, useEffect } from 'react'
import './App.css'
import { ThemeSelector } from './ThemeSelector';
import { ScaleSelector } from './ScaleSelector';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  

  const handleInputChange = (e) => {
    const value = e.target.value;
    /*
    const keyCode = value.slice(-1).charCodeAt()
    if ( (keyCode < 49 || keyCode > 122) && keyCode !== 32) {
      return
    }
    */
    if (typeof value.slice(-1) !== 'string') {
      return
    }
    setSearchInput( prev => value);
}




  return (
    <>

    <div className={`wrapper ${darkTheme ? 'dark' : null}`} style={ {backgroundImage: `url("../public/background/bg${darkTheme ? '11' : '12'}.jpg")`,} }>

    <div className="header" style={ {color: darkTheme ? 'white' : 'black', backgroundColor: darkTheme ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.35)'} } >

    <ScaleSelector darkTheme={darkTheme} />

      <div className={`search-bar ${darkTheme ? 'dark' : null}`}>
        <h1>Weather search</h1>
        
        <label htmlFor="search-input">
          <input type="text" placeholder='Insert a city/ZIP/country' 
          value={searchInput} maxLength='24' onChange={(e) => handleInputChange(e)} name='search-input'/>
        </label>
        </div>

        <ThemeSelector darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
   


    </div>
    </div>
    </>
  )
}

export default App
