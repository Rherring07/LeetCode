// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

var searchRange = function (nums, tar) {
    let l = 0,
      r = nums.length - 1,
      lIdx = -1,
      rIdx = -1;
    while (l <= r) {
      const mid = Math.floor(l / 2 + r / 2);
      if (nums[mid] < tar) {
        l = mid + 1;
      } else if (nums[mid] >= tar) {
        r = mid - 1;
      }
    }
    if (nums[l] === tar) lIdx = l;
    (l = 0), (r = nums.length - 1);
    while (l <= r) {
      const mid = Math.floor(l / 2 + r / 2);
      if (nums[mid] <= tar) {
        l = mid + 1;
      } else if (nums[mid] > tar) {
        r = mid - 1;
      }
    }
    if (nums[r] === tar) rIdx = r;
    return [lIdx, rIdx];
  };


  