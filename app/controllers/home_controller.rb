class HomeController < ApplicationController

  def test
    price = params[:quiz][:price]
    category = params[:quiz][:category]
    respond_to do |format|
      format.json { render json: {price: price, category: category} }
    end
  end

  def quiz_params
    params.require(:quiz).permit(:price, :category)
  end
end
