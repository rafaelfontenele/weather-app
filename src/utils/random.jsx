

/// in progress


const Random = () => {
    return {
        inclusive: (n) => {
            return Math.ceil( Math.random() * n)
        },
        randomIndex: (len) => {
            return Math.floor( Math.random() * len);
        }
    }   


}