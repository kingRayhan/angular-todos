import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { format } from 'date-fns';
import { Todo } from 'src/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
  @Input()
  public todo: Todo;

  @Output()
  public onClickTodo = new EventEmitter<Todo>();

  public handleClickTodo(): void {
    this.todo.done = !this.todo.done;
    this.onClickTodo.emit(this.todo);
  }

  ngOnInit(): void {}
}
