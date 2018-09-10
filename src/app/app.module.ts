import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApplyComponent } from './apply/apply.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApplyComponent,
    FormComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      }, {
        path: 'apply',
        component: ApplyComponent,
      }, {
        path: 'form',
        component: FormComponent,
      }
    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
