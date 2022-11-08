import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  encapsulation: ViewEncapsulation.Emulated,
})
export class ComposerComponent implements OnInit {
  public task: string = '';

  @Output()
  public onCreateNewTask = new EventEmitter<string>();

  public addTask(): void {
    this.onCreateNewTask.emit(this.task);
    this.task = '';
  }

  ngOnInit(): void {}
}
