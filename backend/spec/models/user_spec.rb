require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  it 'should create a new User instance' do
    @user = User.new(
      email: 'benediktms@hey.com',
      password: 'test12345',
      password_confirmation: 'test12345'
    )
    expect(@user).to be_a_new(User)
  end
end
