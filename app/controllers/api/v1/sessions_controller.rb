class Api::V1::SessionsController < ApplicationController #   user = User.find_by(email: params['user']['email']).try(:authenticate, params['user']['password']) # def create
  def create
    user = User.find_by(email: params[:user][:email])

    # user&.valid_passowrd( ... ) is shorthand for user && user.valid_password( ... )
    # this is needed so that 401 is returned both if the password is wrong or if the user does not exist
    if user
      response.status = 201
      render json: {
               status: response.status,
               message: response.message,
               logged_in: true,
               user: user
             }
    else
      # head(:unauthorized)
      response.status = 401
      render json: { status: response.status, message: response.message }
    end
  end
end
