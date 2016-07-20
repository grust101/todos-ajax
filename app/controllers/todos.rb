get '/' do
  redirect '/todos'
end

get '/todos' do
  @todos = Todo.order(:created_at)
  erb :index
end

get '/todos/new' do
  @todo = Todo.new
  if request.xhr? ## AJAX Request
    erb :new, layout: false #send the form but dont send the layout because it's already been loaded
  else
   #Sending all the data HTML CSS AND JS for new form
   erb :new
 end
end

post '/todos' do 
p params
  @todo = Todo.new(params[:todos])
  if @todo.save
    if request.xhr?
      p '=' * 10
      content_type :json
      data = {new_todo: @todo}.to_json
      # erb :new, layout: false
      p @todo
    else
    end

    redirect "/todos"
  else
    redirect "/todos/new" 
  end
end

get '/todos/:id' do
  @todo = Todo.find(params[:id])
  erb :show
end
