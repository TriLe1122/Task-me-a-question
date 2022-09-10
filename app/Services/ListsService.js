import { appState } from "../AppState.js";
import { List } from "../Models/List.js";
import { saveState } from "../Utils/Store.js";



class ListsService {
  removeList(id) {
    let lists = appState.lists.filter(list => list.id != id)
    appState.lists = lists
    saveState('lists', appState.lists)
  }
  createList(newList) {
    console.log('new list', newList);
    let list = new List(newList)
    appState.lists = [list, ...appState.lists]
    saveState('lists', appState.lists)
    console.log(appState.lists);
  }




}

export const listsService = new ListsService