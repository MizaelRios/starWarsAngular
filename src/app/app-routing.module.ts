import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PersonagensListComponent } from './component/personagens-list/personagens-list.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {path:"personagens-list", component: PersonagensListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
