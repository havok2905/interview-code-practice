require_relative './index.rb'

describe 'ArrayShuffle' do
  describe 'run' do
    it 'example 1' do
      subject = ArrayShuffle.new

      nums = [2, 5, 1, 3, 4, 7]
      n = 3
      
      expected = [2, 3, 5, 4, 1, 7] 
      result = subject.run(nums, n)

      expect(result).to eq(expected)
    end

    it 'example 2' do
      subject = ArrayShuffle.new
      
      nums = [1, 2, 3, 4, 4, 3, 2, 1]
      n = 4
      
      expected = [1, 4, 2, 3, 3, 2, 4, 1]
      result = subject.run(nums, n)

      expect(result).to eq(expected)
    end

    it 'example 3' do
      subject = ArrayShuffle.new
      
      nums = [1, 1, 2, 2]
      n = 2
      
      expected = [1, 2, 1, 2]
      result = subject.run(nums, n)

      expect(result).to eq(expected)
    end
  end
end
