

export class API  {

    constructor() {
        this.key = '1c994a41a2554440b8250810232705'
    }
    

    SEARCH_URL = (key, input) => `http://api.weatherapi.com/v1/search.json?key=${key}&q=${input}`;
    CURRENT_URL = (key, input) => `http://api.weatherapi.com/v1/current.json?key=${key}&q=${input}&aqi=no`
    FORECAST_URL = (key, input) => `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${input}&days=7&aqi=no&alerts=no`
  
   
    getData (searchInput, setData) {

    const url = this.FORECAST_URL(this.key, searchInput);


    return fetch(url)
    .then( res => {
        if (res.status !== 200) {
            setData( prev => -1)            
        }
        
        return res.json()        

    })
    .then( data => {

        const objKeys = Object.keys(data);

        if (!objKeys.includes('location') || !objKeys.includes('current') || !objKeys.includes('forecast')) return;

        setData( prev => data);

    }
    ).catch( err => {
        console.log(err);
        return 'error2'
    }
        );
    
    

    }


    getSuggested (searchInput, setSuggestedList) {

        const url = this.SEARCH_URL(this.key, searchInput);
    
    
        return fetch(url)
        .then( res => {
            if (res.status !== 200) {
                return          
            }
            
            return res.json()        
    
        })
        .then( data => {
            const suggestedNames = data.map( item => {
                return item.name;
            })
            setSuggestedList(suggestedNames)
    
        }

        ).catch( err => {
            return
        }

            );
        
        
    
        }
    
    




}