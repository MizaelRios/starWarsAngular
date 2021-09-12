import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PersonagenCardComponent } from './component/personagen-card/personagen-card.component';
import { PersonagensListComponent } from './component/personagens-list/personagens-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonagenCardComponent,
    PersonagensListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
