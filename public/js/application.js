$(document).ready(function() {
	console.log('READY');

	getNewTodosForm();
	postNewTodo();


});

function getNewTodosForm(){
// console.log("inside new form function");
$('#new-todo-form').on('click', function(event){
	event.preventDefault();

	// console.log('event', event)

	$.ajax({ 
		url: '/todos/new',
		method: 'GET'
	})
	.done(function(serverData){
		// console.log(serverData);
		// hide the link for new form
		$('#new-todo-form').hide();
		// show the form
		$('#new-todo').append(serverData);
	})
	.fail(function(serverData){
		console.log('failing');
	})
})
};


function postNewTodo(){
	$('#new-todo').on('submit', function(event){
		event.preventDefault();
		console.log(this)
		var formData = $('#new-todo form').serialize();
		// console.log(formData)


		$.ajax ({
			url: '/todos', 
			method: 'POST',
			data: formData
		})	
		.done(function(serverData){
			console.log('Success', serverData)
		})
		.fail(function(serverData){
			console.log('Failing')
		})
	})

}
