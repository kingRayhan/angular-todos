import { v4 as uid } from 'uuid';

export class Todo {
  public id: number;
  public task: string;
  public done: boolean;
  public created_at: Date;

  constructor(task: string) {
    this.id = uid();
    this.task = task;
    this.done = false;
    this.created_at = new Date();
  }
}
