import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
})
export class ComposerComponent implements OnInit {
  constructor() {}

  public task: string = '';

  @Output()
  public onCreateNewTask = new EventEmitter<string>();

  public addTask(): void {
    this.onCreateNewTask.emit(this.task);
    this.task = '';
  }

  ngOnInit(): void {}
}
