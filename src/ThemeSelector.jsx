
export const ThemeSelector = ( {darkTheme, setDarkTheme} ) => {
    const iconUrl = `url("${darkTheme ? 'moon-light' : 'sun-dark'}.svg")`

    return (
        <>
        <div className="theme-selector-wrapper">
            <button className="current-theme" style={ {backgroundImage: iconUrl,
            border: darkTheme ? '1px solid white' : '1px solid black',
            backgroundColor: darkTheme ? 'transparent' : null  } } onClick={() => setDarkTheme(prev => !prev)}></button>
        </div>
        </>
)
}