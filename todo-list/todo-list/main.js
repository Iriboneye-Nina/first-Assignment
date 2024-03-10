const {
    addTask,
    displayTasksByCategory,
    markTaskAsCompleted,
    removeTask
  } = require('./index');
  
  // Add tasks
  addTask("Task 1", "Category 1");
  addTask("Task 2", "Category 1");
  addTask("Task 3", "Category 2");
  
  // Display tasks by category
  console.log("Tasks by Category:");
  displayTasksByCategory();
  
  // Mark a task as completed
  markTaskAsCompleted("Task 1");
  
  // Display tasks by category after marking as completed
  console.log("Tasks by Category after marking as completed:");
  displayTasksByCategory();
  
  // Remove a task
  removeTask("Task 2");
  
  // Display tasks by category after removing a task
  console.log("Tasks by Category after removing a task:");
  displayTasksByCategory();
  