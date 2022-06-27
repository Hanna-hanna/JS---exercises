// *
// **
// ***
// ****
// *****
// ******


let result = '';
let length = 7;

for (let i = 1; i < length; i++) {
    
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    
    result += '\n';

}

console.log(result);

// ********
// *******
// ******
// *****
// ****
// ***
// **
// *

let resultRevert = '';
let lengthRevert = 11;

for (let i = 1; i < lengthRevert; i++) {
    
    for (let j = lengthRevert; j > i; j--) {
        resultRevert += '*';
    }
    
    resultRevert += '\n';

}

console.log(resultRevert);


//      *
//     ***
//    *****
//   *******
//  *********
// ***********


let resultBig = '';
let lengthBig = 6;

for (let i = 1; i < lengthBig; i++) {

    for (let k = lengthBig; k > i; k--) {
        resultBig += ' ';   
    }
    
    
    for (let j = 0; j < i; j++) {
        resultBig += '*';
       
    }

    for (let m = 0; m < i; m++) { 
        if(m === 0) {
            continue;
        }
        resultBig += '*';
    }
    
    resultBig += '\n';

}

console.log(resultBig);

// 2 вариант

const lines = 5;
let res = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        res += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        res += "*";
    }
    res += "\n";
}

console.log(res);
