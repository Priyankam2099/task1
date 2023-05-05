let array1=[3,5,6,3,7,1,7,9];
let unique = array1.reduce((accumulator,currentValue) => {
    if(!accumulator.includes(currentValue)){
    accumulator.push(currentValue);
    }
    return accumulator;
},[]);
console.log(unique);
