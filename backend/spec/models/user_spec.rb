require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  it 'should create a new User instance' do
    user = User.new
    expect(user).to be_a_new(User)
  end

  it 'should have a valid email' do
    user = User.new(email: nil)
    expect(user).to_not be_valid
  end

  it 'should have a valid password' do
    user = User.new(password: 'hi')
    expect(user).to_not be_valid
  end

  it 'should have a valid password'
end
