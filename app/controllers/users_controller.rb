class UsersController < ApplicationController
  before_action :authorize, only: [:show, :update, :destroy]
  skip_before_action :authorize, only: :create


  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @current_user, include: ['thoughts', 'thoughts.comments']
  end

  # POST /users
  def create
    user = User.create!(user_params_create)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  # PATCH/PUT /users/1
  def update
    @user = User.find params[:id]
    if @user.update(user_params_image)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username, :email, :image, :password_digest)
    end
     def user_params_image
      params.require(:user).permit(:image)
     end
    def user_params_create
      params.permit(:username, :password, :password_confirmation, :email)
    end
end
