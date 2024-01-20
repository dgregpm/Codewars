/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let cnt = new Map();

    for(let i=0;i<nums.length;i++){
        const n = target - nums[i];

        if(cnt.has(nums[i])){
            return [cnt.get(nums[i]),i];
        }
        cnt.set(n,i);        
    }
    return [];
}

console.log(twoSum([2,7,11,15],9));
