import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoCounts } from 'src/models/TodoCounts';
import { TODO_STATUS } from 'src/models/TODO_STATUS';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent implements OnInit {
  constructor() {}

  public TODO_STATUS = TODO_STATUS;

  @Input()
  public counts: TodoCounts;

  @Output()
  public onChangeFilter = new EventEmitter<TODO_STATUS>();

  @Output()
  public onClear = new EventEmitter();

  ngOnInit(): void {}
}
