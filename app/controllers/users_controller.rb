class UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    show
  end

  def show
    if user_signed_in?
      @user = current_user
      render component: 'UserPage', props: { user: @user }, tag: 'div'
    else
      redirect_to root_url
    end
  end

  def destroy
  end

end
