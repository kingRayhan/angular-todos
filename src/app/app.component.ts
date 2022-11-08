import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { Todo } from 'src/models/Todo';

import { TodosService } from './services/todos.service';

@Component({
  selector: '#root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(public readonly todoService: TodosService) {}
}
