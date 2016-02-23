Rails.application.routes.draw do
  devise_for :users

  root 'eng_words#index'
end
