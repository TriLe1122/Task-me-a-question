import { generateId } from "../Utils/generateId.js";


export class List {

  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color

  }



  get ListTemplate() {
    return /*html*/ `
  <div class="col-md-4 my-3 ">
          <div class="elevation-5 rounded  ">
            <div class=" rug p-2 rounded-top d-flex text-white">
              <img class="" src="" alt="">
              <div class="d-flex flex-column w-100 justify-content-center">
                <div class="d-flex  flex-wrap  text-end">
                  <i onclick="app.listsController.removeList('${this.id}')" class="mdi mdi-close selectable text-danger selectable "></i>
                </div>
                <div class="text-center mb-3">
                  <h2 class="text-light text-center py-2 bulletin-font justify-content-between">${this.name}</h2>
                  <p>6/9</p>
                </div>
              </div>
            </div>
            <div class="px-3 cloud">
              <div id="item" class="pb-3 px-3">

                <!-- ANCHOR start item for task -->
                <div class="d-flex justify-content-between mb-1 mt-2">
                  <input type="checkbox" name="" id="">
                  <p class="border-bottom border-2 border-dark text-light">saf334sdffgsdg</p>
                  <div class="d-flex ">
                    <i onclick="" class="mdi mdi-delete  selectable"></i>
                  </div>
                </div>
                <!-- ANCHOR end of just one item for task -->

                <div class="d-flex justify-content-between mb-1">
                  <input type="checkbox" name="" id="">
                  <p class="text-light">saf334sdffgsdg</p>
                  <div class="d-flex gap-5">
                    <p>asdfasdfasfd</p>
                    <i onclick="" class="mdi mdi-delete text-danger selectable"></i>
                  </div>
                </div>
                <div class="d-flex justify-content-between mb-1">
                  <input type="checkbox" name="" id="">
                  <p>saf334sdffgsdg</p>
                  <div class="d-flex gap-5">
                    <p>asdfasdfasfd</p>
                    <i onclick="" class="mdi mdi-delete text-danger selectable"></i>
                  </div>
                </div>
                <div class="d-flex justify-content-between mb-1">
                  <input type="checkbox" name="" id="">
                  <p>saf334sdffgsdg</p>
                  <div class="d-flex gap-5">
                    <p>asdfasdfasfd</p>
                    <i onclick="" class="mdi mdi-delete text-danger selectable"></i>
                  </div>
                </div>


              </div>
              <form onsubmit="" class="py-2 pb-3">
                <div class="form-group d-flex justify-content-between border-bottom border-2 border-danger">
                  <input class="" type="text" name="description" placeholder="Task Yeah">
                  <button class="btn" type="submit"><i class="mdi mdi-plus"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
  
    `
  }
}