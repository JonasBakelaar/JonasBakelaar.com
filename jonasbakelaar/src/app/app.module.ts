import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoopComponent } from './coop/coop.component';
import { UiModule } from './ui/ui.module';
import { HomeComponent } from './home/home.component';
import { EmmetrosComponent } from './coop/emmetros/emmetros.component';

const appRoutes: Routes = [
  { path: 'coop', component: CoopComponent },
  { path: 'coop/emmetros', component: EmmetrosComponent},
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Jonas Bakelaar | Testing' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CoopComponent,
    HomeComponent,
    EmmetrosComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
