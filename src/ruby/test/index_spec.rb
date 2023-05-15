require_relative './index.rb'

describe 'Test' do
  describe 'run' do
    it 'should run' do
      subject = Test.new
      result = subject.run
      expect(result).to eq('Hello, world!') 
    end
  end
end
