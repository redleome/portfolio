import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WorksComponent } from './works/works.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

const appRoutes: Routes = [
  { path: 'works', component: WorksComponent },
  { path: 'app-page2', component: Page2Component },
  { path: '', // no path means that it will redirect to the default url -  homepage
     redirectTo: '/works',
     pathMatch: 'full'
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WorksComponent,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
       appRoutes,
       { enableTracing: false } // <-- debugging purposes only
   )
   // other imports here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
