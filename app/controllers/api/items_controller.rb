class Api::ItemsController < ApplicationController

  before_action :set_category
  before_action :set_item, only: [:show, :update, :destroy]

  def index
    render json: @category.items
  end

  def show
    render json: @item
  end

  def create
    @item=@category.items.new(item_params)
    if (@item.save)
      render json: @item
    else
      render json: { errors: @item.errors }, status: 422
    end
  end

  def update
    if (@item.update(item_params))
      render json: @item
    else
      render json: { errors: @item.errors }, status: 422
    end
  end

  def destroy
    render json: @item.destroy
  end

  private

  def set_category
    @category=Category.find(params[:category_id])
  end

  def set_item
    @item=@category.items.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :price, :description)
  end


end
