/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(arr) {
     let result = false;
      // create a Set with array elements
      const s = new Set(arr);
      // compare the size of array and Set
      if(arr.length !== s.size){
         result = true;
      }
      if(result) {
         return true;
      } else {
        return false;
      }
};
