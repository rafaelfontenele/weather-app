

export class API  {

    constructor() {
        this.key = '1c994a41a2554440b8250810232705'
    }
    

    SEARCH_URL = (key, input) => `http://api.weatherapi.com/v1/search.json?key=${key}&q=${input}`;
    CURRENT_URL = (key, input) => `http://api.weatherapi.com/v1/current.json?key=${key}&q=${input}&aqi=no`
    FORECAST_URL = (key, input) => `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${input}&days=1&aqi=no&alerts=no`
  
    getCurrent = async (input) => {
        const response = await fetch(this.CURRENT_URL(this.key, input));
        const json = await response.json();

        return json.body;
    }

    getData (searchInput) {

    const url = this.CURRENT_URL(this.key, searchInput);


    const response = fetch(url)
    .then( res => {

        if (!res.ok) {
            console.log('not ok. Err 1');
            return -1;
            
        }
        
        return res.json()        

    })
    .then( data => {
        console.log('success');
        return (data);
    }
    ).catch( err => {
        console.log(err);
        return 'error2'
    }
        );
    
    
    return response;

    }


    getSearchList(input) {

        const url = this.SEARCH_URL(this.key, input);

        fetch(url)
            .then( response => response.json())
                .then( data => {
                    if (data.ok) console.log(`Success: ${data}`)
                    else Promise.reject()
                })
                .catch( err => console.log(err));

}

}