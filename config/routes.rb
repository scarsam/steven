Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'
  get '/quiz', to: 'home#quiz', as: 'quiz'
  get '/selection', to: 'home#selection', as: 'selection'
  post '/test', to: 'home#test', as: 'test'

end
