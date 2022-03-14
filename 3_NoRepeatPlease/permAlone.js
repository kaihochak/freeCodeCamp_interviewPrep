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

 function permAlone(str) {
    
    let numPerm = 0;                    // # total permutations without repeated consecutive letters 
    var current;                        // current letter
    var next;                           // next letter

    // Get all possible permutations 
    let allPerm = getPerm(str);
    console.log(`Passed String: ${str}`);
    console.log(`All Permutation: ${allPerm}`);

    // What 
    allPerm.forEach (perm => {
        console.log(`\nChecking "${perm}"`);

        let IsRepeated = false;                                       // reset flag to false

        // Iterate over each permutation ressult
        for ( let i = 0; i < perm.length && !IsRepeated ; i++ ) {
            
            current = perm[i];                                  // assign current letter
            next = perm[+i+1];                                  // assign next letter
            console.log(`- comparing ${current} and ${next}`);

            // Step out of checking the same string, if repeated consecutive letters are found.
            if (current == next) {
                IsRepeated = true;                              
                console.log(`    Repeated consecutive letters found!`);
                console.log(`    "${perm}" is rejected.`)
            }
        }

        // Increase number of "non-repeat" permutation results, if it matches the condition
        if ( !IsRepeated ) {
            numPerm++;
            console.log(`${perm} is valid permuitation. Number of valid permutations: ${numPerm}`);
        }
    })

    return numPerm;
}

/**
 * 
 *  function getPerm(str) 
 *      
 *      Input: a string
 *      Output: an array of permutation given a string
 * 
 *      This is a recursive helper function that takes a string and return its permutation. For
 *  example, if the initial input string is "abc", each character char_i in "abc" will be
 *  iterated. And it works as follows:
 *
 *  "abc" > "a" is the char_i, the subsequence "bc" will be passed into getPerm("bc")
 *      "bc" >> "b" is the char_i, "c" will be passed into getPerm("c")
 *          "c" >>> base case: "c" will be returned, back to "bc"
 *           ===============RESULT: "b" + "c" = "bc"==================
 * 
 *      "bc" >> "c" is the char_i, "b" will be passed into getPerm("b")
 *          "b" >>> base case: "b" will be returned, back to "bc"
 *           ===============RESULT: "c" + "b" = "cb"==================
 *      
 *      ===============RESULT: "a" + "bc" = "abc"==================
 *      ===============RESULT: "a" + "cb" = "acb"==================
 *      // Results will be return back to caller "abc" //
 *
 *  "abc" > "b" is the char_i, the subsequence "ac" will be passed into getPerm("ac")
 *      "ac" >> "a" is the char_i, "c" will be passed into getPerm("c")
 *          "c" >>> base case: "c" will be returned, back to "ac"
 *           ===============RESULT: "a" + "c" = "ac"==================
 * 
 *      "ac" >> "c" is the char_i, "a" will be passed into getPerm("a")
 *          "a" >>> base case: "c" will be returned, back to "ac"
 *           ===============RESULT: "c" + "a" = "ca"==================
 * 
 *      ===============RESULT: "b" + "ac" = "bac"==================
 *      ===============RESULT: "b" + "ca" = "bca"==================
 *      // Results will be return back to caller "abc" //
 * 
 *  "abc" > "c" is the char_i, the subsequence "ab" will be passed into getPerm("ab")
 *      "ab" >> "a" is the char_i, "b" will be passed into getPerm("b")
 *          "b" >>> base case: "b" will be returned, back to "ab"
 *           ===============RESULT: "a" + "b" = "ab"==================
 * 
 *      "ab" >> "b" is the char_i, "a" will be passed into getPerm("a")
 *          "a" >>> base case: "b" will be returned, back to "ab"
 *           ===============RESULT: "b" + "a" = "ba"==================
 * 
 *      ===============RESULT: "c" + "ab" = "cab"==================
 *      ===============RESULT: "c" + "ba" = "cba"==================
 *      // Results will be return back to caller "abc" //
 * 
 *  ==========FINAL RESULT: ["abc", "acb", "bac", "bca", "cab", "cba"] ==================
 * 
 *      
 *      In the program, we made it either a base case or a recursive case, where different
 *  instructions are executed:     
 * 
 *  base case: input str's length == 1
 *      1. push the only one char in results[] 
 *      2. return results[]
 * 
 *  recursive case: input str's length > 1
 *      => iterate over each char in str - (e.g. "a", "b", then "c" for "abc")
 * 
 *          i. split the ith char and the remaining subsequence as two strings
 *                  e.g. if ith char is "b" in "abc", 
 *                              split it into "b" and "ac"
 *                         
 *          ii. pass the remaining subsequence into a recursive function: getPerm("subseq")
 *                  e.g. if ith char is "b" in "abc"
 *                              call getPerm("ac")) => ["ac", "ca"]
 * 
 *          iii. iterate over the each result from recursion (e.g. ["ac", "ca"] for )
 *                  e.g. if ith char is "b" in "abc"
 *                              call getPerm("ac")) => ["ac", "ca"] 
 *  
 */

function getPerm(str) {
    var results = [];                   

    // console.log(`\n                    ======================`);
    // console.log(`                      Recursion for "${str}"`);
    // console.log(`                    ======================`);

    // Base Case: simply return the one-char string
    if (str.length === 1) {
        results.push(str);
        // console.log(`\n>>>>>>>>>>>>>>> START - char #1: "${str[0]}" in "${str}" - START >>>>>>>>>>>>>>>`);
        // console.log(`Base case reached!`);
        // console.log(`<<<<<<<<<<<<<<< END - char #1: "${str[0]}" in "${str}" - END <<<<<<<<<<<<<<<\n`);
    } else {
    // Recursive Case: iterate over each char and pass the rest of char to getPerm as a subsequence string
        // iterate over each char in str
        for (var i = 0; i < str.length; i++) {

            // i. split the ith char and the remaining subsequence as two strings
            var char_i = str[i];                                             // store char #i (e.g. i = 2, "b" in "abc")
            var subseq = str.substring(0, i) + str.substring(i + 1);         // store the subsequence (e.g. "ac" in "abc")

            // console.log(`\n>>>>>>>>>>>>>>> START - char #${i+1}: "${str[i]}" in "${str}" - START >>>>>>>>>>>>>>>`);
            // console.log(`"${str}" split into "${char_i}" and "${subseq}".`);
            // console.log(`Then, "${subseq}" passed to getPerm("${subseq}")`);

            // ii. pass the remaining subsequence into a recursive function (e.g. getPerm("ac") => ["ac", "ca"])
            var recurResult = getPerm(subseq);         
            
            // console.log(`\n>>>>>>>>>>>>>>> back to char #${i+1}: "${str[i]}" in "${str}" >>>>>>>>>>>>>>>\n`); 
            // console.log(`getPerm("${subseq}") => ${recurResult}`);                     
            // console.log(`iterate over  = [${recurResult}]\n`);                      

            // iii. iterate over the each result from recursion (e.g. ["ac", "ca"])
            for (var j = 0; j < recurResult.length; j++) {

                results.push(char_i + recurResult[j]);                      // push each (ith char + returned) value to the result 
                                                                            // e.g. "b" + "ac" = "bac", then "b" + "ca" = "bca" 
                
                // console.log(`char_i + recurResult[${j}]: "${char_i}" + "${recurResult[j]}" = "${char_i + recurResult[j]}"`);
                // console.log(`Result Updated: "${results}"`) 
            }
            // console.log(`\n<<<<<<<<<<<<<<< END - char #${i+1}: "${str[i]}" in "${str}" - END <<<<<<<<<<<<<<<`);
        }
    }

    // console.log(`                    ======================`);
    // console.log(`                    Recursion for "${str}" Ended`);
    // console.log(`                    ======================`);

    return results;
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

var testResult;

// Testing permAlone
console.log(`Testing permAlone("aab"): `)
testResult = permAlone('aab');
console.log(`Result: ${testResult}`);

// permAlone('aaa');

// permAlone('aabb');

// permAlone('abcdefa');

// permAlone('abfdefa');

// permAlone('zzzzzzzz');

// permAlone('a');

// permAlone('aaab');

// permAlone('aaabb');

