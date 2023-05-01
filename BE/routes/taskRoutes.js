const express = require('express');
const router = express.Router();



// router.post('/', async (req, res) => {
//   try {
//     const { username, score } = req.body;

//     const result = await taskService.saveTaskInDB(username, score);
//     res.status(200).json(result);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal server error.');
//   }
// });



const taskController = require('../controllers/taskController');

// CREATE task
router.post('/', taskController.createTask);

// READ all tasks
router.get('/', taskController.getAllTasks);

// READ task by id
router.get('/:id', taskController.getTaskById);

// UPDATE task by id
router.put('/:id', taskController.updateTaskById);

// DELETE task by id
router.delete('/:id', taskController.deleteTaskById);

module.exports = router;
