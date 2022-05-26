class ThoughtReactionsController < ApplicationController
  before_action :set_thought_reaction, only: [:show, :update, :destroy]

  # GET /thought_reactions
  def index
    @thought_reactions = ThoughtReaction.all

    render json: @thought_reactions
  end

  # GET /thought_reactions/1
  def show
    render json: @thought_reaction
  end

  # POST /thought_reactions
  def create
    @thought_reaction = ThoughtReaction.new(thought_reaction_params)

    if @thought_reaction.save
      render json: @thought_reaction, status: :created, location: @thought_reaction
    else
      render json: @thought_reaction.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /thought_reactions/1
  def update
    if @thought_reaction.update(thought_reaction_params)
      render json: @thought_reaction
    else
      render json: @thought_reaction.errors, status: :unprocessable_entity
    end
  end

  # DELETE /thought_reactions/1
  def destroy
    @thought_reaction.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_thought_reaction
      @thought_reaction = ThoughtReaction.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def thought_reaction_params
      params.require(:thought_reaction).permit(:thought_id, :user_id)
    end
end
