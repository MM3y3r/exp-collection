// Firebase imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
// import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
// general imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
} from '@angular/material';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreatorComponent } from './creator/creator.component';
import { ModifierComponent } from './modifier/modifier.component';

export class User {
  description = 'Your Title';
  experiences = 'Ad Content';
  name = 5.0;
  socialMedia = 'http://via.placeholder.com/350x150';
}

const appRoutes: Routes = [
  { path: 'modifier', component: CreatorComponent },
  { path: 'creator', component: CreatorComponent },
  { path: 'thankyou', component: ThankyouComponent },
  {
    path: '',
    redirectTo: '/creator',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [AppComponent, ThankyouComponent, PagenotfoundComponent, CreatorComponent, ModifierComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only. Enable if logging is needed.
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
