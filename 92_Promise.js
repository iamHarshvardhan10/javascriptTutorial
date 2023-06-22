// promise 

const bucket = ['coffee','chips','vegetables','rice']

const friedRicePromise = new Promise((resolve,reject) => {
    if(bucket.includes("vegetables") && bucket.includes('salt') ){
        resolve({value:'friedRice'})
    }else{
        reject('something miss')
    }
})




// how  to consume

friedRicePromise.then(
    (myfriedRice) => {
        console.log('lets set', myfriedRice);
    }
    ,
    (error) => {
        console.log(error)
    }
)