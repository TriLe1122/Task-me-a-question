import { generateId } from "../Utils/generateId.js";


export class Task {

  constructor(data) {
    this.id = data.id || generateId()
    this.description = data.description

  }


}
