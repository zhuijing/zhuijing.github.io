

async function sleep(ms,arg) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(arg)
        }, ms);
    })
}
async function async1() { 
    console.log('async1 start')
    await async2() 
    await async3() 
    await async4() 
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
    await async5() 
    const x = await sleep(5000, 'async2 -sleep')
    console.log(x)
    console.log('async2 async2')
}
async function async3() {

    console.log('async3')
    const y = await sleep(8000, 'async3 -sleep')
    console.log(y)


}
async function async4() {
    console.log('async4')
}
async function async5() {
    console.log('async5')
}



console.log('script start')


setTimeout(function() {
    console.log('setTimeout')
}, 0) 


async1() 

new Promise(function(resolve){ 
    console.log('promise1') 
    resolve()
}).then(function() {
    console.log('promise2')
})

console.log('script end')

