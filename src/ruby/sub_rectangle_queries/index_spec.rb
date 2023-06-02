require_relative './index.rb'

describe 'SubrectangleQueries' do
  describe 'get_value' do
    it 'fetches a value' do
      rectangle = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 5, 0],
        [0, 0, 0]
      ]

      subject = SubrectangleQueries.new rectangle

      result = subject.get_value 2, 1
      expected = 5

      expect(result).to eq(expected)
    end
  end

  describe 'update_sub_rectangle' do
    it 'example 1' do
      rectangle = [
        [1, 2, 1],
        [4, 3, 4],
        [3, 2, 1],
        [1, 1, 1]
      ]

      subject = SubrectangleQueries.new rectangle

      subject.update_sub_rectangle 0, 0, 3, 2, 5
      expect(subject.rectangle).to eq([
        [5, 5, 5],
        [5, 5, 5],
        [5, 5, 5],
        [5, 5, 5]
      ])

      subject.update_sub_rectangle 3, 0, 3, 2, 10
      expect(subject.rectangle).to eq([
        [5, 5, 5],
        [5, 5, 5],
        [5, 5, 5],
        [10, 10, 10]
      ])
    end
  end

  it 'example 2' do
    rectangle = [
      [1, 1, 1],
      [2, 2, 2],
      [3, 3, 3]
    ]

    subject = SubrectangleQueries.new rectangle

    subject.update_sub_rectangle 0, 0, 2, 2, 100
    expect(subject.rectangle).to eq([
      [100, 100, 100],
      [100, 100, 100],
      [100, 100, 100]
    ])

    subject.update_sub_rectangle 1, 1, 2, 2, 20
    expect(subject.rectangle).to eq([
      [100, 100, 100],
      [100, 20, 20],
      [100, 20, 20]
    ])
  end
end
