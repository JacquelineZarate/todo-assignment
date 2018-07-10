import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTodo: string = "";
  chores = [];
  editTodo(chore) {
    let index = this.chores.indexOf(chore);
    let tempTodo = this.chores[index].name;
    this.chores[index].name = prompt ("Please write new todo");

    if (this.chores[index].name == null) {
      this.chores[index].name = tempTodo;
    }
  }
  createTodo() {
    let trimmedInput = this.newTodo.trim();
    if(trimmedInput !== "") {
    this.chores.push(
    {
      isChecked: false,
      name: this.newTodo
    }
  );
    }
    this.newTodo = "";
  };
  deleteTodo(chore) {
    let index = this.chores.indexOf(chore);
    this.chores.splice(index, 1);
  };
  checkOffTodo(chore) {
    chore.isChecked = (chore.isChecked) ? false: true;
  }
}
