const tasks = [];


function addTask(title, category, completed = false) {
    const newTask = { title, category, completed };
    tasks.push(newTask);
  }
  
  function displayTasksByCategory() {
    const categories = {};
  
    tasks.forEach(task => {
      if (!categories[task.category]) {
        categories[task.category] = [];
      }
      categories[task.category].push(task.title);
    });
  
    Object.entries(categories).forEach(([category, tasks]) => {
      console.log(`Category: ${category}`);
      tasks.forEach(task => {
        console.log(`  - ${task}`);
      });
    });
  }
  
  function markTaskAsCompleted(title) {
    const task = tasks.find(task => task.title === title);
    if (task) {
      task.completed = true;
      console.log(`Task "${title}" marked as completed.`);
    } else {
      console.log(`Task "${title}" not found.`);
    }
  }
  
  function removeTask(title) {
    const taskIndex = tasks.findIndex(task => task.title === title);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      console.log(`Task "${title}" removed.`);
    } else {
      console.log(`Task "${title}" not found.`);
    }
  }
  
  module.exports = {
    tasks,
    addTask,
    displayTasksByCategory,
    markTaskAsCompleted,
    removeTask
  };
