// Task class
class Task {
    constructor(description, category) {
      this.description = description;
      this.category = category;
      this.completed = false;
    }
  }
  
  // ToDoList class
  class ToDoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(description, category) {
      const task = new Task(description, category);
      this.tasks.push(task);
      console.log(`New task added: ${description} (${category})`);
    }
  
    displayTasksByCategory() {
      const categories = {};
  
      this.tasks.forEach(task => {
        if (!categories[task.category]) {
          categories[task.category] = [];
        }
        categories[task.category].push(task.description);
      });
  
      console.log("Tasks by category:");
  
      for (let category in categories) {
        console.log(category);
        categories[category].forEach(task => {
          console.log(`- ${task}`);
        });
      }
    }
  
    markTaskAsCompleted(description) {
      const task = this.tasks.find(task => task.description.toLowerCase() === description.toLowerCase());
      if (task) {
        task.completed = true;
        console.log(`Task "${task.description}" marked as completed.`);
      } else {
        console.log("Sorry, the task you are trying to mark as completed does not exist.");
      }
    }
  
    removeTask(description) {
      const taskIndex = this.tasks.findIndex(task => task.description.toLowerCase() === description.toLowerCase());
      if (taskIndex !== -1) {
        this.tasks.splice(taskIndex, 1);
        console.log(`Task "${description}" has been removed from the ToDo list.`);
      } else {
        console.log("Sorry, the task you are trying to remove does not exist.");
      }
    }
  }
  
  // Example usage
  const toDoList = new ToDoList();
  
  toDoList.addTask("Buy groceries", "Personal");
  toDoList.addTask("Finish homework", "School");
  toDoList.addTask("Clean room", "Personal");
  toDoList.addTask("Read a book", "Leisure");
  
  toDoList.displayTasksByCategory();
  
  toDoList.markTaskAsCompleted("Finish homework");
  toDoList.markTaskAsCompleted("Go for a walk");
  
  toDoList.displayTasksByCategory();
  
  toDoList.removeTask("Clean room");
  toDoList.removeTask("Go to the park");
  
  toDoList.displayTasksByCategory();
  