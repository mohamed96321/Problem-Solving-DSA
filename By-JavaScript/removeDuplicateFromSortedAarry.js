/**
 * @param Remove_Duplicate_From_Sorted_Aarry
 * Explain: {
 * In the example above, we first create an instance of the 
 * RemoveDuplicates class. We then call the removeDuplicates method, 
 * passing the sorted array as an argument. 
 * The method modifies the array in-place, removing the duplicates and 
 * returning the new length of the array.
  After calling the removeDuplicates method, 
  we log the result to the console. In this case, 
  the original array [1, 1, 2, 2, 3, 4, 4, 5, 5] has duplicates removed, 
  resulting in a new length of 5. We also log the modified array by 
  slicing it from index 0 to the new length, displaying the array 
  without duplicates: [1, 2, 3, 4, 5].
  The removeDuplicates method uses two pointers, i and j, 
  to iterate through the array. The pointer i points to 
  the last element of the resulting array without duplicates. 
  The pointer j traverses the array and compares each element 
  with the element at index i. If they are different, i is incremented, 
  and the element at index j is assigned to the element at index i, 
  effectively removing the duplicate. Finally, the method returns i + 1, 
  representing the new length of the array without duplicates.
 * }
 */

class RemoveDuplicates {
  removeDuplicates(nums) {
    if (nums.length === 0) {
      return 0;
    }

    let i = 0;

    for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
        i++;
        nums[i] = nums[j];
      }
    }

    return i + 1;
  }
}

const nums = [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 6];
const remover = new RemoveDuplicates();
const result = remover.removeDuplicates(nums);
// Show the total of Numbers that duplicated
console.log(result); 
// Print the new array without duplicate numbers
console.log(nums.slice(0, result)); 
