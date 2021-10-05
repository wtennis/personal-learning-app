Rails.application.routes.draw do
  
  resources :notes, only: [:update, :destroy, :create]
  resources :folder_contents, only: [:show, :create]
  resources :resources, only: [:index, :destroy]
  resources :folders, except: [:show]
  # resources :users


  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
