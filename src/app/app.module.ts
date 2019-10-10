import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoiteComponent } from './noite/noite.component';
import { QuartaComponent } from './quarta/quarta.component';

@NgModule({
  declarations: [
    AppComponent,
    NoiteComponent,
    QuartaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
