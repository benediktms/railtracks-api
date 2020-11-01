class Api::V1::TestsController < ApplicationController
  def index
    render json: { status: "It's working" }
  end
end
