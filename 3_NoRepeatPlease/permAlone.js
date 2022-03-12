/**
 * No Repeats Please:
 * 
 *      Return the number of total permutations of the provided string that don't have repeated 
 * consecutive letters. Assume that all characters in the provided string are each unique.
 * 
 *  For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba,
 *  baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) 
 *  repeating.
 * 
 * Source of Solution:
 * 
 *      Here is a very useful article and code by Tim Nelson, a huge part of my solution was based 
 *  on his explanation and code:
 * 
 *           https://medium.com/@tdnelson/javascript-algorithms-no-repeats-please-173c3abb29fc
 * 
 *  As mentioned, I created this repository for my self learning purpose only. I changed Mr. Nelson's
 *  code only where it would make it more beneficial to myself such as changing variables' names such 
 *  that it's more descriptive TO ME.
 * 
 * My Takeaway:
 * 
 *  - Unary plus (+)
 * 
 *      During the loop of str, I tried to access the next letter by str[i+1], which only 
 *  concatenate i and 1 thus access the wrong element.  With Unary plus (+), i.e. str[+i+1], I can 
 *  convert i and 1 to integer.
 * 
 *  - String.substring()
 * 
 * 
 * 
 */

/**
 * 
 * 
 * 
 */
let count = 0;

function getAllPermutations(string) {
    var results = [];

    // count++;
    // console.log(`Current Count: `)
    // console.log(count);
    console.log(`\n                      ==================`);
    console.log(`                      Recursion for "${string}"`);
    console.log(`                      ==================`);

    // base case: length is 1, stop
    if (string.length === 1) {
        results.push(string);
        console.log(`\n~~~~~~~~~~~~~~~~~~~~ START - char #1: "${string[0]}" in "${string}" - START ~~~~~~~~~~~~~~~~~~~~~`);
        console.log(`Base case reached!`);
        console.log(`\n~~~~~~~~~~~~~~~~~~~~ END - char #1: "${string[0]}" in "${string}" - END ~~~~~~~~~~~~~~~~~~~~~\n\n`);
        return results;
    }

    // recursive step: length > 1
    for (var i = 0; i < string.length; i++) {

        var firstChar = string[i];                                            // store char #i (e.g. i = 2, "b" in "abc")
        var remaining = string.substring(0, i) + string.substring(i + 1);     // store reminaing letters (e.g. "ac" in "abc")

        console.log(`\n~~~~~~~~~~~~~~~~~~~~ START - char #${i+1}: "${string[i]}" in "${string}" - START ~~~~~~~~~~~~~~~~~~~~~`);
        console.log(`- firstChar: "${firstChar}"`); 
        console.log(`- remaining: "${remaining}" passed to getPerm("${remaining}")\n`);

        var recurResult = getAllPermutations(remaining);                      // pass remaining letters to recursive function (e.g getPerm("bc"))
        console.log(`getPerm() => ${recurResult}`);

        // 
        for (var j = 0; j < recurResult.length; j++) {
            results.push(firstChar + recurResult[j]);                           // push returned value to the result
            
            console.log(`\n j = ${j}`);
            console.log(`"${firstChar}" + "${recurResult[j]}" = "${firstChar + recurResult[j]}"`);
            console.log(`Result Updated: "${results}"`) 
        }
        console.log(`\n~~~~~~~~~~~~~~~~~~~~ END - char #${i+1}: "${string[i]}" in "${string}" - END ~~~~~~~~~~~~~~~~~~~~~\n`);

    }
    console.log("Recursion Ends!\n");
    console.log(">>>>>>>>>>>>>>>>> \n");
    return results;
}

 getAllPermutations("abc")

 function permAlone(str) {
    
    var result = 0;                     // # total permutations without repeated consecutive letters 
    var current;                        // current letter
    var next;                           // next letter

    console.log(`Str: ${str}`);

    // Get all possible permutations 
    for (let char of str) {
        console.log(char);
    }

    // for (let i in str ) {
    //     current = str[i];                                   // assign current letter
    //     next = str[+i+1];                                   // assign next letter
    //     console.log(`Comparing ${current} and ${next}`);    
    //     if (current == next) {
    //         console.log(`match!`);
            
    //     }
    // }

    // return result
    console.log(result);
    return result;
}

/**
 * Test Cases:
 * 
 *      permAlone("aab") should return a number.
 * 
 *      permAlone("aab") should return 2.
 * 
 *      permAlone("aaa") should return 0.
 * 
 *      permAlone("aabb") should return 8.
 * 
 *      permAlone("abcdefa") should return 3600.
 * 
 *      permAlone("abfdefa") should return 2640.
 * 
 *      permAlone("zzzzzzzz") should return 0.
 * 
 *      permAlone("a") should return 1.
 * 
 *      permAlone("aaab") should return 0.
 * 
 *      permAlone("aaabb") should return 12.
 * 
 */
  
// permAlone('aab');

// permAlone('aaa');

// permAlone('aabb');

// permAlone('abcdefa');

// permAlone('abfdefa');

// permAlone('zzzzzzzz');

// permAlone('a');

// permAlone('aaab');

// permAlone('aaabb');