import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTodo = "";
  name = "Jacqueline";
  chores = [
    "Take out trash",
    "Feed cats",
    "Clean litter box",
    "Make food",
    "Wash dishes"
  ];
  editTodo(chore) {
    let index = this.chores.indexOf(chore);
    console.log(chore);
    this.chores[index] = prompt ("Please write new todo");
  }
  createTodo() {
    console.log(this.newTodo);
    this.chores.push(this.newTodo);
    this.newTodo = "";
  };
  deleteTodo(chore) {
    let index = this.chores.indexOf(chore);
    console.log(index);
    this.chores.splice(index, 1);
  };
}
