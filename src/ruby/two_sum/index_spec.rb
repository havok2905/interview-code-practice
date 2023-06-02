require_relative './index.rb'

describe 'TwoSum' do
  describe 'run' do
    it 'example 1' do
      subject = TwoSum.new

      integers = [2, 7, 11, 15]
      target = 9
      
      expected = [0, 1]
      result = subject.run(integers, target)

      expect(result).to eq(expected)
    end

    it 'example 2' do
      subject = TwoSum.new

      integers = [3, 2, 4]
      target = 6
      
      expected = [1, 2]
      result = subject.run(integers, target)

      expect(result).to eq(expected)
    end

    it 'example 3' do
      subject = TwoSum.new
      
      integers = [3, 3]
      target = 6

      expected = [0, 1]
      result = subject.run(integers, target)

      expect(result).to eq(expected)
    end
  end
end
