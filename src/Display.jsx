import { useState } from 'react';

export const Display = ( {data, darkTheme} ) => {
    const darkClass = darkTheme ? 'dark' : null;
    return (
<>
        {data || (
            <div className={`no-data-display ${darkClass}`}>Select a place to display</div>
        )}
</>

    )

}