import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class List {

  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color
    this.task = data.task
    this.taskTotal = data.taskTotal
    this.check = data.check || false


  }



  get ListTemplate() {
    return /*html*/ `
  <div class="col-md-4 my-3 h-80 " >
          <div class="elevation-5 rounded  " style="border:${this.color} 5px solid; border-radius:5%; border-end-start-radius:0%; border-end-end-radius:0%; border-bottom:0px">
            <div class=" rug p-2  d-flex text-white"  >
              <img class="" src="" alt="">
              <div class="d-flex flex-column w-100 justify-content-center" >
                <div class="d-flex  flex-wrap  text-end" >
                  <i onclick="app.listsController.removeList('${this.id}')" class="mdi mdi-close selectable text-danger selectable "></i>
                </div>
                <div class="text-center mb-3">
                  <h2 class=" text-center py-2 bulletin-font justify-content-between"style="color:${this.color} ">${this.name}</h2>
                  <div class='text-center'>
                  ${this.TaskTotal.length}/${this.Tasks.length}

                  </div>
                  </div>
                  </div>
                  </div>
            </div>
            <div class="px-3 cloud " style="border:${this.color} 5px solid; border-top:0px; border-radius:5%; border-start-start-radius:0%; border-start-end-radius:0%">
              <div id="item" class="pb-3 px-3">

                
                ${this.TasksTemplate}
                


              </div>
              <form onsubmit="app.tasksController.createTask('${this.id}')" class="py-2 pb-3">
                <div class="form-group d-flex justify-content-between ">
                  <input class="task-yeah" type="text" name="description" placeholder="Task Yeah" required >
                  <button class="btn" type="submit"><i class="mdi mdi-plus"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
  
    `
  }

  get TasksTemplate() {
    let template = ''
    this.Tasks.forEach(task => template += task.TaskTemplate)
    return template
  }

  get Tasks() {
    let tasks = appState.tasks.filter(task => task.listId == this.id)
    return tasks
  }

  get TaskTotal() {
    let checked = appState.tasks.filter(task => task.checked == true)
    let total = checked.filter(task => task.listId == this.id)
    return total
  }
}