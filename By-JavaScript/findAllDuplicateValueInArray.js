/**
 * @param Find_All_Duplicate_Value_In_Array
 */

const findDuplicateValue = nums => {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let value = Math.abs(nums[i]);
        let index = value - 1;
        if (nums[index] < 0) {
            result.push(value);
        } else {
            nums[index] *= -1;
        }
    }
    return result;
};

let data = findDuplicateValue([2, 3, 3, 1, 4, 5, 2]);
console.log(data);
