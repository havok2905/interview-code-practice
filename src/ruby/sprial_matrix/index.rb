=begin
Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

Constraints:

    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 10
    -100 <= matrix[i][j] <= 100
=end

=begin
Thoughts:
  - may require memory to store visited, but may not
  - out of bounds checking/lookahead logic
  - may need to loop on array layers
  - alway row x col; can just check [row].len and [row][col]len
  - Read side - 1
=end

class SpiralMatrix
  def run(matrix)
    output = []
    
    rows = matrix.length
    cols = matrix[0].length

    top = 0
    right = cols - 1
    bottom = rows - 1
    left = 0

    dir = 1

    # iterate over every square until we can't move into a square;
    #   - Square is invalid; top > bottom, left > right
    # each step, check our direction to move in
    # while in that direction, progress until we can't
    # increment inward
    # change direction

    while top <= bottom && left <= right
      if dir == 1
        i = left
        while i <= right
          output.push matrix[top][i]
          i = i + 1
        end
        top = top + 1
        dir = 2
      elsif dir == 2
        i = top
        while i <= bottom
          output.push matrix[i][right]
          i = i + 1
        end
        right = right - 1
        dir = 3
      elsif dir == 3
        i = right
        while i >= left
          output.push matrix[bottom][i]
          i = i - 1
        end
        bottom = bottom - 1
        dir = 4
      else dir == 4
        i = bottom
        while i >= top
          output.push matrix[i][left]
          i = i - 1
        end
        left = left + 1
        dir = 1
      end
    end

    output
  end
end