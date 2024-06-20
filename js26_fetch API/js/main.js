/* fetch API that requires discussion of 
callbacks, Promises, Thenables and async/await */
/* callbacks ==>> are the functions that are passed to other functions as parameters */
function firstFunction(parameter, callback) {
    // do stuff
    callback();
}
"callback hell"
/*firstFunction(para, function() {
    // do some stuff 
    secondFunction(para, function() {
        // do some stuff
        thirdFunction(para, function() {
            // do some stuff
        })
    })
}) */
// to avoid the callback hell we have Promise
// Promise
// 3 state : pending, fullfilled, rejected
// 1. fullfilled
const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve("yes! resolved the Promise!");
    } else {
        reject("No! rejected the Promise!");
    }
})
// to get the state of the Promise 
console.log(myPromise);
// to get the actual value of the Promise 
// we need to have thenables
/* Thenables are used to prevent the callback hell */
myPromise
.then(value => {
    return value + 1;
})
.then(newValue => {
    console.log(newValue);
})
/////////////////////////
// what if we get error
// to catch error we have 
// 2. rejected
const myPromise2 = new Promise((resolve, reject) => {
    const error = true;
    if (!error) {
        resolve("yes! the Promise is resolved!");
    } else {
        reject("No! the Promise is rejected!");
    }
})
console.log(myPromise2);
// so we have an error now so we need to catch error using catch method
myPromise2
.then(value => {
    return value + 1;
})
.then(newValue => {
    console.log(newValue);
})
.catch(err => {
    console.error(err);
})
// if we have an error the catch method will straight up skips all the then chain and log the error to the console ****
///////////////////////////////////////
// before we discuss the 3 state of Promise that is pending
// we need to know what's the real reason having Promise
// now kinda simulating or a way to visualize the real reason of the Promise besides the we know it prevents callback hell now we need to know the actual reason
const myPromise1 = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve("yes! the Promise is resolved!");
    } else {
        reject("No! the Promise is rejected!");
    }
})

const myNextPromise = new Promise((resolve, reject) => {
    // to delay the function I'm gonna use setTimeout method
    setTimeout(function() {
        resolve("yes! the Promise is resolved!");
    }, 3000);
})
// so now I'm gonna call first Promise i,e.. myNextPromise then I'm gonna call myPromise1 that is to intentionally check for the response
myNextPromise
.then(value => {
    console.log(value);
})

myPromise1
.then(value => {
    console.log(value);
})
//as we can see javascript does'nt wait 
// it's like you go ahead and I'll catch up later 






