class CharactersController < ApplicationController
  before_action :set_character, only: [:show, :update, :destroy]
  skip_before_action :authorize, only: [:index, :create]
  # GET /characters
  def index
    @characters = Character.all

    render json: @characters, include: ['thoughts', 'thoughts.comments']
  end

  def chracterstoswipe
    characters = Character.where.missing(:rating).where(ratings: {user_id: !params[:id]})
    render json: characters
  end
  # GET /characters/1
  def show
    render json: @character
  end

  # POST /characters
  def create
    
    characters = Character.left_outer_joins(:ratings).where.not(ratings: {user_id: params[:id]})
    render json: characters.uniq
    # @character = Character.new(character_params)
    # .where(ratings: {user_id: params[:id]})
    # if @character.save
    #   render json: @character, status: :created, location: @character
    # else
    #   render json: @character.errors, status: :unprocessable_entity
    # end
  end

  # PATCH/PUT /characters/1
  def update
    if @character.update(character_params)
      render json: @character
    else
      render json: @character.errors, status: :unprocessable_entity
    end
  end

  # DELETE /characters/1
  def destroy
    @character.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_character
      @character = Character.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def character_params
      params.require(:character).permit(:name, :race, :gender, :bio, :role, :origin)
    end
end
