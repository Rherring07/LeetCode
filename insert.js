// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

 // O(n), O(n)
var insert = function (intervals, newInterval) {
    let [start, end] = newInterval;
    let left = [];
    let right = [];
    
    for (const interval of intervals) {
      const [first, last] = interval;
      
      // current interval is smaller than newInterval
      if (last < start) left.push(interval);
      
      // current interval is larger than newInterval
      else if (first > end) right.push(interval);
      
      // there is a overlap
      else {
        start = Math.min(start, first);
        end = Math.max(end, last);
      }
    }
    
    return [...left, [start, end], ...right]; 
  };