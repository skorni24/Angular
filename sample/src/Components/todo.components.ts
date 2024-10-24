import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.components.html',
  styleUrls: ['./todo.components.css'],
})
export class TodoComponent {
  todos: Array<string> = [];
  todoInput: string = '';

  addTodo() {
    if (this.todoInput.trim()) {
      this.todos.push(this.todoInput);
      this.todoInput = '';
    }
  }
  deleteItem(index: number) {
    this.todos.splice(index, 1);
  }
}
