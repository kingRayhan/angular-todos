import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TODO_COUNTS } from 'src/models/TodoCounts';
import { TODO_STATUS } from 'src/models/TODO_STATUS';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent implements OnInit {
  public TODO_STATUS = TODO_STATUS;

  @Input()
  public selectedFilter: TODO_STATUS;

  @Input()
  public counts: TODO_COUNTS;

  @Output()
  public onChangeFilter = new EventEmitter<TODO_STATUS>();

  @Output()
  public onClear = new EventEmitter();

  ngOnInit(): void {}
}
