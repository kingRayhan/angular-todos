import { Component, OnChanges } from '@angular/core';
import { v4 } from 'uuid';
import { Todo } from 'src/models/Todo';
import { TodoCounts } from 'src/models/TodoCounts';
import { TODO_STATUS } from 'src/models/TODO_STATUS';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges {
  public todos: Todo[] = [];

  public selectedFilter: TODO_STATUS = TODO_STATUS.ALL;

  get filteredTodos(): Todo[] {
    if (this.selectedFilter === TODO_STATUS.ALL) {
      return this.todos;
    } else if (this.selectedFilter === TODO_STATUS.ACTIVE) {
      return this.todos.filter((todo) => !todo.done);
    } else if (this.selectedFilter === TODO_STATUS.COMPLETED) {
      return this.todos.filter((todo) => todo.done);
    }

    return this.todos;
  }

  /**
   * Todo counts
   * @returns TodoCounts
   */
  get todosCounts(): TodoCounts {
    return {
      totalCount: this.todos.length,
      completedCount: this.todos.filter((todo) => todo.done).length,
      incompletedCount: this.todos.filter((todo) => !todo.done).length,
    };
  }

  /**
   * Create new todo
   * @param todo
   */
  public addTodo(task: string): void {
    const todo: Todo = {
      id: v4(),
      task,
      done: false,
      created_at: new Date(),
    };
    this.todos.unshift(todo);
  }

  public clearCompleted(): void {
    this.todos = this.todos.filter((todo) => !todo.done);
  }

  public ngOnChanges(): void {
    console.log('ngOnChanges');
  }
}
