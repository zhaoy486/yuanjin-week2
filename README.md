yuanjin-week2
=============
CCLAB02 : Javascript Libraries + JQuery
jQuery is a Javascript Library helpful for document (html) manipulation, event handling, Ajax calls and animations. You treat it the same way you treat any other library. Another great library (that could be a good next step) in UnderscoreJS.

Review NEW File Structure

index.html
style folder >> style.css
js folder >> main.js
js folder >> jquery >> jquery-1.11.1.js

Note It's standard (and a good idea) to link to google-hosted jquery library, but for the sake of learning library usage, we'll include it in our scripts folder.

Set up pseudo-code in script

init function
task array
save task
update task
delete task
Link JS to HTML

call the main.js file before </body>
<script src="js/main.js"></script>
calls the library before </head>
<script src="js/jquery/jquery-1.11.1.js"></script>
Note This is a good place to talk about .min.js vs .js, as well as the importance of load order.

init( )

var init = function(){
  console.log('Heck yeah libraries!')
};
load listener

Underneath init(), add:

$( document ).ready(function() {
    init();
});
Test by reloading the page and checking the console.

saveTask ( )

Define the function and push new task to taskArray.

var saveTask = function(){

    //define the task input form and value
    var newTask =  $('#newTask').val();

    //add the value to the task Array
    taskArray.push(newTask);

    //clear the input
    $('#newTask').val('');

  //log the task array
  console.log(taskArray);

};

Test by refreshing, adding a task and firing saveTask() int the console.

Link to the add button in init()

  $('#addButton').on('click', function(e){
      e.preventDefault();
      saveTask();
  });

Note it is also acceptable to write $('#addButton').click(function(e){ as the first line, but using .on('click', function(e){ provides additional options like hover, mouseenter, mouseleave, focus and blur.

Test by refreshing and adding a task.

updateTasks( )

Define the function and log each task.

var updateTasks = function(){
  $(taskArray).each(function(i){
      console.log('task ' + i + ': ' + this);
  });
};

Test by refreshing, adding a few tasks and firing updateTasks().

Clear the task list holding div by adding the following before $(taskArray).each

$('#taskList').empty();
Create the task divs in the .each function.
var newTask = $('<div/>');
Assign id, class and task to the new div.
$(newTask).attr("id", i).addClass("task").html('<p>' + this + '</p>');
Create a deleteButton before var newTask.

var deleteButton = $('<button / >');
$(deleteButton).attr('id', 'deleteButton').text('X');

Append the delete button to newTask and append to newTask.

$(newTask).append(deleteButton);
Append the newTask to task list holding div.
$('#taskList').append(newTask);
Test by reloading the browser and adding a task.

Fire updateTasks at the end of saveTask( )

updateTasks();
Note The div definition can be one big string, but for the sake of clarity, I split it up. The spaghetti version would look like:  var deleteButton = $('<button / >').attr('id', 'deleteButton').text('X');   var newTask = $('<div/>').attr('id', i).addClass('task').html('<p>' + this + '</p>').append(deleteButton); $('#taskList').append(newTask); 

deleteTask( )

Create a delete function.

var deleteTasks = function(e){

  console.log('You want to delete me?');

};
Add an event listener in updateTask()
$(deleteButton).attr('id', 'deleteButton').text('X').on('click', function(e){
      deleteTask(e);
});
Test by reloading, adding a task and click the delete button.

Delete console.log('You want to delete me?') and replace it with

var taskNumber = e.target.parentElement.id;
taskArray.splice(taskNumber, 1);
updateTasks();
Refresh in browser and test.
The end!

Helpful Resources

jQuery API Documentation http://api.jquery.com/
CodeAcademy jQuery Tutorials http://www.codecademy.com/tracks/jquery
MDN Javascript Reference https://developer.mozilla.org/en-US/docs/Web/JavaScript
Database of JS Libraries http://www.jsdb.io/
Bower (a command-line package manager) http://bower.io/
