import { useState, useEffect } from 'react'
import './App.css'
import { ThemeSelector } from './ThemeSelector';
import { ScaleSelector } from './ScaleSelector';
import { Display } from './Display';
import { startKeyPressListener } from './utils/keyPress'
import { API } from './API.js';

function App() {
  const [data, setData] = useState('data');
  const [darkTheme, setDarkTheme] = useState(true);
  const [searchInput, setSearchInput] = useState('Singapore');
  const [suggestedList, setSuggestedList] = useState([]);
  const api = new API();


  useEffect( () => {
    if (searchInput.length > 5) return;

    //const options = api.getSearchList(searchInput, 'SEARCH');
    //console.log(options);


  }, [searchInput])
  
const test = () => api.getData('London');

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

    const data = api.getCurrent(searchInput);
    setSearchInput( prev => '');

    console.log(data);
  }




  return (
    <>

    <div className={`wrapper ${darkTheme ? 'dark' : null}`} style={ {backgroundImage: `url("../public/background/bg${darkTheme ? '11' : '12'}.jpg")`,} }>

    <div className="header" style={ {color: darkTheme ? 'white' : 'black', backgroundColor: darkTheme ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)'} } >

    <ScaleSelector darkTheme={darkTheme} />


      <div className={`search-bar ${darkTheme ? 'dark' : null}`}>
        <h1>Weather search</h1>
        
        <label htmlFor="search-input" id='search'>
          <input type="search" placeholder='Insert a city/ZIP/country' 
          value={searchInput} maxLength='24' onChange={(e) => handleInputChange(e)} name='search-input'/>
          <button name='search-input' style={ {backgroundImage: `url("./public/search-${darkTheme ? 'light' : 'dark'}.svg")`} } className='search-btn' onClick={() => search()}></button>
        </label>
        </div>

        <ThemeSelector darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
  
    </div>


    <Display data={data} darkTheme={darkTheme}/>

    <button className="test" onClick={() => test()}>TEST()</button>

    </div>
    </>
  )
}

export default App
