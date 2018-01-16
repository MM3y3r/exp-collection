// Firebase imports
import { AngularFireModule } from 'angularfire2';
import { Md5 } from 'ts-md5/dist/md5';
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

const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Types :
class socialMedia {
  github: string;
  twitter: string;
  linkedIn: string;
}
class experience {
  name: string;
  description: string;
  duration: string;
}
class User {
  name: string;
  title: string;
  description: string;
  socialMedia: socialMedia;
  experiences: [experience];
}
@Component({
  selector: 'app-root',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent {
  slug: Int32Array | string;
  experienceInputName: string = '';
  experienceInputDuration: string = '';
  experienceInputDescription: string = '';
  // User: Observable<any>;
  users: AngularFireList<User>;
  // usersRef: AngularFireList<User>;
  UserObject: User;
  ExperienceObjectArray: [experience];
  ExperienceCounter: number;
  UserID: string;
  // expName.value;
  // expDuration.value;
  // expDescription.value;

  // TODO: definitly build frontend validation for  experience....
  constructor(db: AngularFireDatabase, private router: Router) {
    // this.slug = Md5.hashStr('blah blah blah');
    this.users = db.list('/users');
    this.UserID = this.idGen();
    this.UserObject = {
      name: "",
      title: "",
      description: "",
      socialMedia: {
        github: "",
        twitter: "",
        linkedIn: "",
      },
      experiences: [{
        name: "testUser",
        description: "testDesription",
        duration: "testDuration",
      }],
    };
    this.ExperienceObjectArray = [null];
    this.ExperienceCounter = 0;
    const usersRef$: Observable<User[]> = this.users.valueChanges();
    usersRef$.subscribe(console.log);
  }


  idGen = () => {
    var rtn = '';
    for (var i = 0; i < 8; i++) {
      rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return rtn;
  }

  onInputChange(key: string, value: string) {
    this.UserObject[key] = value;
    //console.log(this.UserObject);
  }

  onSocialInputChange(key: string, value: string) {
    this.UserObject.socialMedia[key] = value;
    //console.log(this.UserObject);
  }

  onExperienceInputChange(key: string, value: string) {
    //console.log("exp name : " + this.experienceInputName);
    try {
      if (!this.ExperienceObjectArray[this.ExperienceCounter]) {
        this.ExperienceObjectArray[this.ExperienceCounter] = {
          name: "",
          description: "",
          duration: "",
        }
      }
      this.ExperienceObjectArray[this.ExperienceCounter][key] = value;
      //console.log(this.ExperienceObjectArray);

    } catch (error) {
      console.warn('error at the onExperienceInputChange: ' + error);
    }
  }

  addExperienceToUserObject() {
    if (!this.experienceValidation(this.ExperienceObjectArray[this.ExperienceCounter])) {
      console.log("invalid exp input. Not adding to userObj!");
      return;
    }
    console.log('writing to array number ' + this.ExperienceCounter);
    this.UserObject.experiences.push(this.ExperienceObjectArray[this.ExperienceCounter]);
    this.ExperienceCounter++;
    this.clearExperienceInput();
  }

  experienceValidation(experience: any) {
    // TODO : add alternative templates...
    try {
      if (!experience || experience.name === "" || experience.description === "" || experience.duration === "") {
        //TODO: user feedback
        return false;

      } else if (experience.name === "testUser" || experience.description === "testDesription" || experience.duration === "testDuration") {
        //TODO: user feedback
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.warn('error at the experienceValidation: ' + error);
    }
  }

  // clears the experience input fields
  clearExperienceInput() {
    this.experienceInputName = null;
    this.experienceInputDuration = null;
    this.experienceInputDescription = null;
  }

  removeItemFromList(key: string) {
    this.users.remove(key).then(_ => console.log('item deleted!'));
  }

  submitToFirebase() {
    //TODO: implement custom key!!!
    this.users.set(this.UserID, this.UserObject).then(_ => console.log(`Data pushed to Firebase!`));
    this.router.navigateByUrl('/thankyou')
  }
}
