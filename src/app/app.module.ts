import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComposerComponent } from './composer/composer.component';
import { TodoComponent } from './todo/todo.component';
import { ControlsComponent } from './controls/controls.component';
@NgModule({
  declarations: [
    AppComponent,
    ComposerComponent,
    TodoComponent,
    ControlsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
