class CommentsController < ApplicationController
  before_action :set_comment, only: [:update, :destroy]

  # GET /comments
  def index
    @commic = Comic.find(params[:comic_id])
    @comments = Comment.where(comic_id: @comic.id)
    # https://support.workato.com/en/support/discussions/topics/1000091251
    render json: @comments.sort_by{|x| x[:created_at]}.reverse, include: :user
  end

  #GET /comments/1
  def show
    @comment = Comment.find(params[:id])
    render json: @comment 
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
      @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:content, :user_id, :comic_id)
    end
end
