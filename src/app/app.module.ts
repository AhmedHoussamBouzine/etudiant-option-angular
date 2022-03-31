import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddOptionComponent } from './components/add-option/add-option.component';
import { AddEtudiantComponent } from './components/add-etudiant/add-etudiant.component';
import { ListOptionComponent } from './components/list-option/list-option.component';
import { ListEtudiantComponent } from './components/list-etudiant/list-etudiant.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AddOptionComponent,
    AddEtudiantComponent,
    ListOptionComponent,
    ListEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'addOption', component:AddOptionComponent },
      {path: 'addEtudiant', component: AddEtudiantComponent},
      {path: 'listOption', component: ListOptionComponent},
      {path: 'listEtudiant', component: ListEtudiantComponent},
      {path: '', redirectTo: '/addEtudiant', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
