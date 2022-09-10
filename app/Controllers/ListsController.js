import { appState } from "../AppState.js"
import { List } from "../Models/List.js"
import { listsService } from "../Services/ListsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"


function _drawList() {
  let template = ``

  appState.lists.forEach(list => template += list.ListTemplate)
  setHTML('list', template)
}

export class ListsController {
  constructor() {
    _drawList()
    appState.on('lists', _drawList)
    appState.on('tasks', _drawList)
  }



  createList() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let newList = getFormData(form)
      listsService.createList(newList)

      // @ts-ignore
      form.reset()

    } catch (error) {
      console.log(error);
    }
  }

  removeList(id) {
    if (window.confirm('Dont Give Up On Your Dreams')) {
      listsService.removeList(id)
    }

  }
}