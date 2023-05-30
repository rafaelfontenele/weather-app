import { useState, useEffect } from 'react'
import './App.css'
import { ThemeSelector } from './ThemeSelector';

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [currentBg, setCurrentBg] = useState('4');
  const [searchInput, setSearchInput] = useState('');
  const [styles, setStyles] = useState({
    wrapper: {
      backgroundImage: `url("../public/background/bg${currentBg}.jpg")`,
      animation: 'none'
    }
  })
  

  const handleInputChange = (e) => {
    const value = e.target.value;
    const keyCode = value.slice(-1).charCodeAt()
    if ( keyCode < 65 || keyCode > 122) {
      console.log('invalid input');
      return
    }
    if (typeof value.slice(-1) !== 'string') {
      return
    }
    setSearchInput( prev => value);
}
const backgroundSlideshow = (delayMs, setCurrentBg) => {
  const bgListLength = 13;
  let nextRandomBg = Math.ceil(Math.random() * bgListLength);
  }


useEffect( () => {
  switch (currentTheme) {
    case 'light': 
      setCurrentBg( prev => '4');
      break
    case 'dark': 
      setCurrentBg( prev => '11');
      console.log('dark');
      break
    case 'random':
      setCurrentBg( prev => '13');
      backgroundSlideshow(2000, setCurrentBg);
      break
  }
}, [currentTheme])

  return (
    <>

    <div className={`wrapper ${currentTheme}`} style={ {...styles.wrapper} }>

    <div className="search-wrapper">

      <div className="search-bar">
        <h1>Weather search</h1>
        
        <label htmlFor="search-input">
          <input type="text" placeholder='Insert a city/ZIP/country' 
          value={searchInput} maxLength='24' onChange={(e) => handleInputChange(e)} name='search-input'/>
        </label>
        </div>

        <ThemeSelector currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
   


    </div>
    </div>
    </>
  )
}

export default App
