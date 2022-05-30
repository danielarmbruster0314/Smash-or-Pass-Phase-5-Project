class CharactersController < ApplicationController
  before_action :set_character, only: [:show, :update, :destroy]
  skip_before_action :authorize, only: [:index, :create, :swipe, :toppasses, :topsmashes]


  # GET /characters
  def index
    @characters = Character.all

    render json: @characters, include: ['thoughts', 'thoughts.comments', 'thoughts.more_validations', 'thoughts.more_invalidations']
  end
  
  def toppasses
    characters = Character.more_passes_than_smashes.sort_by{ |obj| obj.totalpasses }
    sorted = characters.reverse.take(10)
    
    render json: sorted, include: ['thoughts', 'thoughts.comments', 'thoughts.more_validations', 'thoughts.more_invalidations']

  end 


  def topsmashes
    characters = Character.more_smashes_than_passes.sort_by{ |obj| obj.totalsmashes }
   sorted = characters.reverse.take(10)
    render json: sorted, include: ['thoughts', 'thoughts.comments', 'thoughts.more_validations', 'thoughts.more_invalidations']

  end 



  def swipe
    characters = Character.left_outer_joins(:ratings).where.not(ratings: {user_id: params[:id]})
    swipebatch = characters.uniq
    render json: swipebatch.take(15)
  end
  # GET /characters/1
  def show
    render json: @character
  end

  # POST /characters
  def create
    @character = Character.new(character_params)

    if @character.save
      render json: @character, status: :created, location: @character
    else
      render json: @character.errors, status: :unprocessable_entity
    end
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
      params.require(:character).permit(:name, :bio, :role, :origin)
    end
end
