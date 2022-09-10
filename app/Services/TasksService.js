import { appState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { saveState } from "../Utils/Store.js";


class TasksService {
  toggleCheck(id) {
    let task = appState.tasks.find(task => task.id == id)
    if (!task) {
      throw new Error('Bad ID')
    }
    task.checked = !task.checked
    console.log(task.checked);
    appState.emit('tasks')
    saveState('tasks', appState.tasks)
  }

  deleteTask(listId) {
    let tasks = appState.tasks.filter(task => task.id != listId)
    appState.tasks = tasks
    saveState("tasks", appState.tasks)

  }
  createTask(newTask) {
    let task = new Task(newTask)
    appState.tasks = [task, ...appState.tasks]
    saveState('tasks', appState.tasks)
  }


}

export const tasksService = new TasksService()