// Firebase imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
// general imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FinderComponent } from './finder/finder.component';
import { UploadComponent } from './upload/upload.component';

const appRoutes: Routes = [
  { path: 'finder', component: FinderComponent },
  // { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: HomeComponent },
  // { path: 'experiences', component: ExperiencesComponent },
  { path: 'experiences/:id', component: ExperiencesComponent },
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    redirectTo: '/finder',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: '/finder',
    pathMatch: 'full'
  },
  // {
  //   path: 'experiences',
  //   redirectTo: '/finder',
  //   pathMatch: 'full'
  // },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    ExperiencesComponent,
    FinderComponent,
    UploadComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only. Enable if logging is needed.
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    HttpModule,
    // BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
