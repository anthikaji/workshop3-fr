import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { TryComponent } from './try/try.component';
import { Try1Component } from './try1/try1.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TryComponent,
    Try1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
