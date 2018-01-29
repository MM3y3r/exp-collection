import { OnInit } from '@angular/core';
// Firebase imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../../environments/environment';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireDatabaseModule
} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
// general imports
import { Observable } from 'rxjs/Observable';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatInput
} from '@angular/material';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

// Helpers :
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit {

  uniqueId: string;

  constructor( private router: Router) {
    this.uniqueId = '';
  }

  ngOnInit() {}

  onIdChange(value: string){
    this.uniqueId = value;
    console.log(value);
  }

  navigateToId(event){
    this.router.navigateByUrl(`/home/${this.uniqueId}`);
  }
}
