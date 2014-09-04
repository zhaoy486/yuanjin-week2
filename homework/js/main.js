

var taskArray = [];


var deleteTask = function(e){
	
	var taskNumber = e.target.parentElement.id;
	
	//go to the "taskNumber" position of taskArray and remove one object.
    taskArray.splice(taskNumber, 1);
 
    //update the task view to reflect the new list
    updateTasks();
	
};

var updateTasks = function(){

	//empty the task list holding div
	//**************fill something here:**************
	$('').empty();

	//for each task in the task array, do the following and pass the index:	
	$(taskArray).each(function(i){
		
		console.log('task ' + i + ': ' + this);
		
		//create a delete button, give it an ID, text and an event listener
		var deleteButton = $('<button / >');
		$(deleteButton).attr('id', 'deleteButton').text('X').on('click', function(e){
			deleteTask(e);	
		});
		
		//create a task div, give it an ID and a class, set the content as the task and append the delete button.
		var newTask = $('<div/>');
  		$(newTask).attr('id', i).addClass('task').html('<p>' + this + '</p>');
		$(newTask).append(deleteButton);
		
		//append the newTask div to the task list holding div
		//**************fill something here:**************
		$('').append(newTask);
		
	});

};

var saveTask = function(){
	
	
  	//define the task input form and value
  	//**************fill something here:**************
	var newTask =  $('').val();

    //add the value to the task Array
    taskArray.push(newTask);
 	
    //clear the input
    //**************fill something here:**************
    $('').val('');
 
 	//update tasks
	updateTasks();
	
    //log the task array
    console.log(taskArray);	

	
};


var init = function(){
	console.log('Let\'s learn Javascript!');
	
	//set the addbutton click listener
	//**************fill something here:**************
	$('').on('click', function(e){
		e.preventDefault();
		saveTask();
	});

	
};

$( document ).ready(function() {

    init();
    
});