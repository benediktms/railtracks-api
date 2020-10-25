class Api::V1::TestsController < ApplicationController
  def index
    render json: { users: %w[Jons Kate Harry Mary] }
  end
end
