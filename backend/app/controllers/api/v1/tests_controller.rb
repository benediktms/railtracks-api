class Api::V1::TestsController < ApplicationController
  def index
    render json: {users: ['Jons', 'Kate', 'Harry', 'Mary']}
  end
end
