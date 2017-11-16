import { Component } from '@angular/core';
import { Model, TodoItem } from "./model";


@Component({
  selector: "todo-app",
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AppComponent {
  model = new Model();
  getName() {
    return this.model.user;
  }

  getTodoItems() {
    return this.model.items;
  }
}
