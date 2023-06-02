require_relative './index.rb'

describe 'SpiralMatrix' do
  describe 'run' do
    it 'example 1' do
      matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]

      subject = SpiralMatrix.new
    
      result = subject.run matrix
      expected = [1, 2, 3, 6, 9, 8, 7, 4, 5]

      expect(result).to eq(expected)
    end

    it 'example 2' do
      matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
      ]

      subject = SpiralMatrix.new

      result = subject.run matrix
      expected = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

      expect(result).to eq(expected)
    end

    it 'example 3' do
      matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12]
      ]

      subject = SpiralMatrix.new

      result = subject.run matrix
      expected = [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8]

      expect(result).to eq(expected)
    end

    it 'example 4' do
      matrix = [
        [1, 2, 3],
        [4, 5, 6]
      ]

      subject = SpiralMatrix.new

      result = subject.run matrix
      expected = [1, 2, 3, 6, 5, 4]

      expect(result).to eq(expected)
    end

    it 'example 5' do
      matrix = [
        [1, 2],
        [3, 4],
        [5, 6]
      ]

      subject = SpiralMatrix.new

      result = subject.run matrix
      expected = [1, 2, 4, 6, 5, 3]

      expect(result).to eq(expected)
    end

    it 'example 6' do
      matrix = [
        [1, 2, 3, 4, 5, 6]
      ]

      subject = SpiralMatrix.new

      result = subject.run matrix
      expected = [1, 2, 3, 4, 5, 6]

      expect(result).to eq(expected)
    end

    it 'example 7' do
      matrix = [
        [1],
        [2],
        [3],
        [4],
        [5],
        [6]
      ]

      subject = SpiralMatrix.new

      result = subject.run matrix
      expected = [1, 2, 3, 4, 5, 6]

      expect(result).to eq(expected)
    end
  end
end
