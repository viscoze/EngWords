class UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    show
  end

  def show
    if user_signed_in?
      @user = current_user
      render 'user_page'
    else
      redirect_to root_url
    end
  end

  def destroy
  end

end
