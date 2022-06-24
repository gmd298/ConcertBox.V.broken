Rails.application.routes.draw do
  resources :musicians, only: [:index, :show]
  resources :events
  
  get '/users/:id/events', to: 'users#user_events'

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#create"

end
