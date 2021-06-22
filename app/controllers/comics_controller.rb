class ComicsController < ApplicationController
  before_action :authorize_request, except: [:index]
  before_action :set_Comic, only: [:update, :destroy]

  # GET /comics
  def index
    @comics = Comic.all
    render json: @comics.limit(20).sort_by{|x| x[:created_at]}.reverse
  end

  # GET /comics/1
  def show
    @comic = Comic.find(params[:id])
    render json: @comic, include: :comments
  end

  # POST /comics
  def create
    @comic = Comic.new(comic_params)
    @comic.user = @current_user
    if @comic.save
      render json: @comic, status: :created, location: @comic
    else
      render json: @comic.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comics/1
  def update
    if @comic.update(comic_params)
      render json: @comic
    else
      render json: @comic.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comics/1
  def destroy
    @Comic.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comic
      @comic = @current_user.comics.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def Comic_params
      params.require(:Comic).permit(:title, :author, :summary, :image_url)
    end
end
