Rails.application.routes.draw do
  root 'page#home'
  get 'todo', to: 'page#todo'
end