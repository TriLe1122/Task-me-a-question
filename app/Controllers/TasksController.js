import { tasksService } from "../Services/TasksService.js"
import { getFormData } from "../Utils/FormHandler.js"


export class TasksController {

  constructor() {

  }

  createTask(listId) {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let newTask = getFormData(form)
      newTask.listId = listId
      tasksService.createTask(newTask)
      form.reset()

    } catch (error) {
      console.log(error);
    }
  }

  deleteTask(listId) {
    if (window.confirm('Be honest with yourself')) {
      tasksService.deleteTask(listId)
    }

  }

  toggleCheck(id) {
    tasksService.toggleCheck(id)
  }



}

