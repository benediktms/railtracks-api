Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      # resources :sessions, only: :create
      resources :users, only: %i[show create update]
      resources :tokens, only: :create
    end
  end

  # get '*path'
  #     to: 'application#frontend_index_html',
  #     constraints: ->(request) { !request.xhr? && request.format.html? }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
