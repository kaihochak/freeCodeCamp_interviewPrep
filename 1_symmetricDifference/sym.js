/**
 * Solution based on the first model answer provided by freeCodeCano
*/

function sym() {

    // initialize an array to store arguments
    var args = [];   
    console.log(arguments + `\n`);                         

    // iterate over arguments, convert into an array, scuh that we can use more methods
    for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);                            // push each argument to args[]
        console.log(`Loop ${i + 1}:`)
        console.log(`- What to push? ${arguments[i]}`);     // print what to push
        console.log(`- args[] = ${args}\n`);                  // print args[]
    }

    // .reduce() help keep iterate each element in arguments
    return args.reduce(symDiff);
}

/**
 * helper function that takes two array and return the sysmetric difference
*/

function symDiff(arrayOne, arrayTwo) {
    
    console.log(`===Enter symDiff()===\n`);
    console.log(`arrayOne = :` + arrayOne);
    console.log(`arrayTwo = :` + arrayTwo);
    
    // initialize an array for result
    var result = [];

    // iterate over arrayOne, add eor element to array 
    console.log(`Iterate over arrayOne`);
    arrayOne.forEach(function(item) {
        // push element to result if (1) no match & (2) not in result[]
        if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
            result.push(item);
            console.log(`added: ${item}`);
        } else {
            console.log(`not added: ${item}`);
        };
    }); 
        
    // iterate over arrayTwo, add eor element to array
    console.log(`Iterate over arrayTwo`);
    arrayTwo.forEach(function(item) {
        // push element to result if (1) no match & (2) not in result[]
        if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
            result.push(item);
            console.log(`added: ${item}`);
        } else {
            console.log(`not added: ${item}`);
        };
    }); 

    console.log(`Return result[] = ${result}\n`);
    console.log(`===Exit from symDiff()===\n`);

    return result;  
}

// call function sym()
sym([1, 2, 5], [2, 3, 5], [3, 4, 5], [1, 10, 3, 56])