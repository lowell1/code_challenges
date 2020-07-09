//https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

function solution(nums) {
  var ranges = [];
  var rangeStart = nums[0];
  var rangeEnd = nums[0];

  function addRanges(start, end) {
    if(start === end)
      ranges.push(start);
    else if(start === end - 1)
      ranges.push(start, end);
    else
      ranges.push(`${start}-${end}`);
  }

  for(var i = 1; i < nums.length; i++) {
    if(nums[i] === nums[i - 1] + 1) {
      rangeEnd = nums[i];
    } else {
      addRanges(rangeStart, rangeEnd);

      rangeStart = nums[i];
      rangeEnd = nums[i];
    }
  }

  addRanges(rangeStart, rangeEnd);

  return ranges.join(",");
}
