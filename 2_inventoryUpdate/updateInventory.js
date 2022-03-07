/**
 * Inventory Update:
 * 
 *      Compare and update the inventory stored in a 2D array against a second 2D array 
 * of a fresh delivery. Update the current existing inventory item quantities (in arr1). 
 * If an item cannot be found, add the new item and quantity into the inventory array. 
 * The returned inventory array should be in alphabetical order by item.
 * 
 * My Takeaway
 * 
 *      Based on the second solution provided by freeCodeCamp, I partly wrote this solution. 
 * 
 *      Getting used to the way of javascript handling 2D array and loop. 
 *      Getting to know how to use array.sort()
 *      Geeting to know how to use array.indexOf()
 * 
*/

/**
 * updateInventory
 * 
 * Input:  
 *      arr1 - existing inventory array 
 *      arr2 - item(s) to be updated
 * 
 * Output:
 *      arr1 - updated existing inventory array 
 * 
 */

 function updateInventory(arr1, arr2) {

    var isAdded;
    var isNew;

    // Iterate over item(s) to be updated
    arr2.forEach(newItem => {
    
        isAdded = false;                                        // item status: !isAdded
        console.log(`\nItem to be updated: ${newItem[1]}\nQuantity: ${newItem[0]}`);   // print to check what's being updated

        for (var i = 0; i < arr1.length && !isAdded ; i++) {    // Iterate over current inventory
            if (newItem[1] === arr1[i][1]) {                    // Check if it exists
                console.log(`- ${arr1[i][1]} already exists\n  > quantity updated: ${arr1[i][0]} + ${newItem[0]} = ${arr1[i][0] + newItem[0]}`);
                arr1[i][0] += newItem[0];                       // If exists, update quantity
                isAdded = true;                                 //            and update item status: isAdded
            } 
        }
        
        if (!isAdded) {                                         // Check if it's not added        
            console.log(`- ${newItem[1]} is a new item`);          
            arr1.push(newItem);                                 // If doesn't exist, add new item
            console.log(`  > item added: ${newItem[1]}`);       
            console.log(`  > quantity updated: ${newItem[0]}`);          
        } 
    });       

    console.log(`\narr1 before sorting:`);
    arr1.forEach(element => console.log(element));

    // sort new array alphabetically by their names
    arr1.sort((curr, prev) => {
        
        console.log(`\nComparing\n   > arr1[${arr1.indexOf(curr)}] = ${curr[1]}, with`);
        console.log(`   > arr1[${arr1.indexOf(prev)}] = ${prev[1]}`);

        if (curr[1] > prev[1]) { // check if 
            console.log(`   ${curr[1]} > ${prev[1]}`);
            console.log(`   order remains`);
            return 1;
        } else {
            console.log(`   ${curr[1]} < ${prev[1]}`);
            console.log(`   arr1[${arr1.indexOf(curr)}] sorted to front`);
            return -1;
        }

        //return nextItem[1] > currItem[1] ? 1 : -1;                  // could've been shorter
    });
    console.log(`\nreturn arr1:`);
    arr1.forEach(element => console.log(element));

    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
updateInventory(curInv, newInv);