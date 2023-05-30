
export const ThemeSelector = ( {currentTheme, setCurrentTheme} ) => {
    const possibleThemes = ['light', 'dark', 'random'];
    const iconUrl = `url("../public/${currentTheme}-theme-icon.svg")`

    const handleThemeClick = () => {
        const currentIndex = possibleThemes.indexOf(currentTheme);
        (currentIndex == possibleThemes.length - 1) ? setCurrentTheme(prev => possibleThemes[0]) : setCurrentTheme(prev => possibleThemes[currentIndex + 1]);

    }


    return (
        <>
        <div className="theme-selector-wrapper">
            <button className="current-theme" style={ {backgroundImage: iconUrl} } onClick={() => handleThemeClick()}></button>
        </div>
        </>
)
}