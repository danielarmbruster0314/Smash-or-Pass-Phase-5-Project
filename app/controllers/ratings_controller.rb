class RatingsController < ApplicationController
  before_action :set_rating, only: [:show, :update, :destroy]

  # GET /ratings
  def index
    @ratings = Rating.all

    render json: @ratings
  end

  # GET /ratings/1
  def show
    render json: @rating
  end

  # POST /ratings
  def create
    if Rating.exists?(user_id: params[:user_id], character_id: params[:character_id])
      found = Rating.find_by(user_id: params[:user_id], character_id: params[:character_id])
      rating = found.update(found_attractive: params[:found_attractive])
      render json: rating
    else
      reaction = Rating.create!(thought_reaction_params)
      render json: reaction
    end
  end

  # PATCH/PUT /ratings/1
  def update
    if @rating.update(rating_params)
      render json: @rating
    else
      render json: @rating.errors, status: :unprocessable_entity
    end
  end

  # DELETE /ratings/1
  def destroy
    @rating.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_rating
      @rating = Rating.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def rating_params
      params.permit(:found_attractive, :character_id, :user_id)
    end

  
end
