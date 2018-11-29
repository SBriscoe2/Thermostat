require 'sinatra'

set :public_folder proc {FILE.join(root) }

get '/' do
  headers 'Access-Allow-Control-Origin' => '*'
  Time.now.to_s
end
