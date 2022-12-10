const {performance} = require('perf_hooks');

function memoize(fn){
    let cache = {}
    return function(...args){
        const data = args.join('_')
        
        // i measure the time it tooks retrieve if the data is in cache
        let startCache = performance.now()
            // validate if the data is in cache
            const infoCache = (data in cache) ? cache[data] : fn(...args)
        let endCache = performance.now()  

        // i save the results of time tooks since the execution, the variable reusltsCache has the time that the code takes
        let resultsCache = endCache - startCache
        
        // i measure the time it tooks retrieve the data execute in the  function that the memoize recieves into his arguments
        let start = performance.now()
            const infoFunction = fn(...args)
        let end = performance.now()

        // i save the results of time tooks since the execution, the variable reusltsfunction has the time that the code takes
        let resultsFunction = end - start
        
        //validating if there is data in cache
        
            console.log('function: '+ resultsFunction, 'cache: ' + resultsCache);
            // i compare if the time took by the funciton was less than the time tooks by cache
            if(resultsFunction < resultsCache){
                console.log('the function was faster, it tooks: ' + resultsFunction);
                //if the time ticks by function was less than the time took by cache, then i saved the results of the function in cache in order to keep update the info
                cache[data] = infoFunction
                // and return the function execution
                return infoFunction
            } else {
                console.log('the cache was faster, it tooks: ' + resultsCache);
                //if the time ticks by cache was less than the time took by the function, then i return the data stored in cache
                return infoCache
            }
        
    }
}

module.exports = {memoize}