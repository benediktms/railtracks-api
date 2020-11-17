Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      # resources :tests, only: :index
      resources :sessions, only: :create
      resources :tokens, only: :create 
      # resources :registrations, only: :create
    end
  end

  # get '*path'
  #     to: 'application#frontend_index_html',
  #     constraints: ->(request) { !request.xhr? && request.format.html? }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
