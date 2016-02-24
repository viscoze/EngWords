Rails.application.routes.draw do
  devise_for :users
<<<<<<< HEAD

  root 'eng_words#index'
=======
  resources :users

  match '/users',     to: 'users#index',       via: 'get'
  match '/contact',   to: 'eng_words#contact', via: 'get'
  root  'eng_words#start_page'
>>>>>>> devise-without-SPA
end
