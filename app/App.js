import { ListsController } from "./Controllers/ListsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  listsController = new ListsController()
}

window["app"] = new App();
