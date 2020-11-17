class Api::V1::TokensController < ApplicationController
  def create
    @user = User.find_by_email(user_params[:email])

    # the User#authenticat method get added by bcrypt
    # user&.authenticate( ... ) is shorthand for user && user.authenticate( ... )
    # this is needed so that 401 is returned both if the password is wrong or if the user does not exist
    if @user&.authenticate(user_params[:password])
      response.status = 201
      render json: {
               status: :created,
               token: JsonWebToken.encode(user_id: @user.id),
               user: @user
             }
    else
      head :unauthorized
    end
  end

  private

  # Only allow a trusted parameter "white list" through.
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
