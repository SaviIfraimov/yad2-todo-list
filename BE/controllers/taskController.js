// The defined model for Task
const db = require('../models/Task'); 

const taskController = {};

// GET all tasks
taskController.getAllTasks = async (req, res) => {
  try {
    const tasks = await db.Task.findAll();
    res.json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error retrieving tasks.' });
  }
};

// GET a single task by ID
taskController.getTaskById = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await db.Task.findByPk(id);

    if (!task) {
      res.status(404).json({ message: `Task with ID ${id} not found.` });
    } else {
      res.json(task);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Error retrieving task with ID ${id}.` });
  }
};

// CREATE a new task
taskController.createTask = async (req, res) => {
  const { title, description, status } = req.body;

  try {
    const newTask = await db.Task.create({
      title,
      description,
      status,
    });

    res.status(201).json(newTask);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating task.' });
  }
};

// UPDATE an existing task
taskController.updateTaskById = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  try {
    const taskToUpdate = await db.Task.findByPk(id);

    if (!taskToUpdate) {
      res.status(404).json({ message: `Task with ID ${id} not found.` });
    } else {
      await taskToUpdate.update({
        title,
        description,
        status,
      });

      res.json(taskToUpdate);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Error updating task with ID ${id}.` });
  }
};

// DELETE an existing task
taskController.deleteTaskById = async (req, res) => {
  const { id } = req.params;

  try {
    const taskToDelete = await db.Task.findByPk(id);

    if (!taskToDelete) {
      res.status(404).json({ message: `Task with ID ${id} not found.` });
    } else {
      await taskToDelete.destroy();
      res.json({ message: `Task with ID ${id} deleted.` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Error deleting task with ID ${id}.` });
  }
};

module.exports = taskController;
