class Api::ArticlesController < ApplicationController
  def index
  render json: Article.all
  end

  def create
    @article = Article.new(article_params)
    if(@article.save)
      render json: @article
    else
      render json: { errors: @article.errors}, status: 422
    end
  end

    private

    def article_params
      params.require(:article).permit(:title, :author, :body)
    end
end
