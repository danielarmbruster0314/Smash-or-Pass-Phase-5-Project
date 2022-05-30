Rails.application.routes.draw do
  
  resources :thought_reactions
  resources :ratings
  resources :comments
  resources :thoughts
  resources :characters
  resources :users
  get "/toppasses", to: "characters#toppasses"
  get "/topsmashes", to: "characters#topsmashes"
  post "/topthoughts", to: "thoughts#topthoughts"
  post "/bottomthoughts", to: "thoughts#bottomthoughts"
  post "/randomthoughts", to: "thoughts#randomthoughts"
  post "/swipe", to: "characters#swipe"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
