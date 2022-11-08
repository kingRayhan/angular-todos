import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComposerComponent } from './composer/composer.component';
import { TodoComponent } from './todo/todo.component';
import { ControlsComponent } from './controls/controls.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    ComposerComponent,
    TodoComponent,
    ControlsComponent,
    WrapperComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
