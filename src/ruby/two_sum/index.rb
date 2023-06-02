=begin
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

    2 <= nums.length <= 104; Always have between 2 and up to 104 numbers
    -109 <= nums[i] <= 109; Always have values between -109 and up to 109
    -109 <= target <= 109; Always have a target value between -109 and up to 109
    Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
=end

=begin
  - 109 seems to be an important numner
  - Assume constraints above are handled by i/o; add in data valiation if time
  - Negative numbers are supported; Means I can't just check for gt or lt as quick check

  - Brute force
    - Checking each value against every other value until we have a match
    - O n^2

  - Better
    - Reset y index to new position of x
    - O n * n-1
=end

class TwoSum 
  def run(integers, target)
    x = 0
    y = 0

    while x < integers.length
      while y < integers.length
        return [x, y] if x != y && integers[x] + integers[y] == target
        y = y+1
      end

      x = x+1
      y = x+1
    end
  end
end