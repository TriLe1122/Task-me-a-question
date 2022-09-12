import { generateId } from "../Utils/generateId.js";


export class Task {

  constructor(data) {
    this.id = data.id || generateId()
    this.description = data.description
    this.listId = data.listId
    this.checked = data.checked || false



  }

  get TaskTemplate() {
    return  /*html*/`
    <div class="d-flex justify-content-between mb-1 pt-2">
                  <input onchange="app.tasksController.toggleCheck('${this.id}')" type="checkbox" name="" id=""  ${this.checked ? 'checked' : ''}>
                  <p class="border-bottom border-2 border-dark text-black fw-5 fs-5 px-2 text-center">${this.description}</p>
                  <div class="d-flex ">
                    <i onclick="app.tasksController.deleteTask('${this.id}')" class="mdi mdi-delete  selectable"></i>
                  </div>
                </div>
    
    `
  }


}


// TODO finish task template 