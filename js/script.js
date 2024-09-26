// Array to hold tasks from JSON file
let tasks = [];

// Load tasks from the JSON file
async function loadTasks() {
	try{
	 let response = await fetch("tasks.json");
	 let data = await response.text();
	 tasks = JSON.parse(data);
	}
	catch(error){
		console.error('Fel vid inladdning av uppgifter',error);
	}
}

// Function to display tasks in the UI
function displayTasks() {
	tasks.forEach(currentTask => {
		document.getElementById("task-list").innerHTML += `
		<li>${currentTask.task} <button onclick="handleEvent('remove', currentTask.id)">Remove</button></li>
		`;
	});
}

// Function to handle different events using switch statement
function handleEvent(eventType, taskId) {
  switch (eventType) {
    case 'add':
      

      break;

    case 'remove':

      break;

    case 'complete':

      break;

    default:
      console.log('Unknown event type');
  }
}

// Add event listener for "Add Task" button
document.getElementById('add-task-btn').addEventListener('click', () => handleEvent('add'));

// Initialize the project by loading tasks from the JSON file
loadTasks();