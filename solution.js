// exercise 1


const myVar = { name: "something" };
// I can change myVar.name
myVar.name = "something else" // no fault
console.log(myVar)
// now i use object.freeze
Object.freeze(myVar);
// now i cannot change its name
myVar.name = "something else again"
console.log(myVar)

// to use const in ES5, we use object.definePropperties
// this method is used to make some of properties of an object to stay the same
Object.defineProperties(window, {
    a: {
        value: 1,
    }
}) // now the object window has property a that can not change
// now a =1
console.log(a);
a = 10;
// a  is still 1
console.log(a);



// exercise 2


function letDemo() {
    let x = 15;
    if (true) {
        let x = 21;
        console.log("inner x:", x) //21

    }
    console.log("outer x:", x); //15
}
// because the second x is define again in the inside block with keywork let
// the second x is now the one that the if statement and any subblock inside it use to access variable x
// that is why the inner x is 21.
// The console.log outer x is at the outside block scope of the second x, so it accesses to the first x which is 15
letDemo()


// exercise 3



const l = 10, ms = 100;
// var and let are used in different scope 
// var is scoped to the nearest function
// let is scoped to the nearest enclosed block


for (var i = 0; i < l; i++) {
    setTimeout(() => {
        console.log(i)
    }, ms)
    //i is visible to the whole function

}


// ten 10s
for (let i = 0; i < l; i++) {
    setTimeout(() => {
        console.log(i)
    }, ms)
    //i is only visible in here (and in the for() parentheses)
    //and there is a separate i variable for each iteration of the loop
}
// from 0 -> 9