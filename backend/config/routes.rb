Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # get 'tests', to: 'tests#index'
      resources :tests, only: :index
      resources :sessions, only: :create
      delete :logout, to: 'sessions#logout'
      get :logged_in, to: 'sessions#logged_in'
      resources :registrations, only: :create
    end
  end

  # get '*path'
  #     to: 'application#frontend_index_html',
  #     constraints: ->(request) { !request.xhr? && request.format.html? }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
