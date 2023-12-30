/**
 * Given a positive integer millis, write an asynchronous function 
 * that sleeps for millis milliseconds. It can resolve any value.
 */

// here I had an approach that helped me that promise has default callbacks for getting the result 
// which are resolve or reject and also setTimeout(() => {
    
// }, timeout); has this syntax

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    await new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('done'), millis)

    })

    
    }


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */