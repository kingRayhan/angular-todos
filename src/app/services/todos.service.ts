import { Injectable } from '@angular/core';
import { Todo } from 'src/models/Todo';
import { TODO_COUNTS } from 'src/models/TodoCounts';
import { TODO_STATUS } from 'src/models/TODO_STATUS';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  public todos: Todo[] = [];
  constructor() {}

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
  get todosCounts(): TODO_COUNTS {
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
    this.todos.unshift(new Todo(task));
  }

  public clearCompleted(): void {
    this.todos = this.todos.filter((todo) => !todo.done);
  }
}
