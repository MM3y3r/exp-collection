// Imports
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // baseData: Observable<any[]>;
  // currentUser: AngularFireObject<any>;
  path: string;
  user: object;
  userobject: any;

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute) {
    this.user;
    this.route.params.subscribe(params => (this.path = `users/${params.id}`));
    const userobject = db.object<any>(this.path);
    const currentUser$: Observable<any[]> = userobject.valueChanges();
    currentUser$.subscribe(console.log);
    currentUser$.subscribe(
      response => {
        // console.log('Success Response: ' + JSON.stringify(response));
        this.user = response;
        console.log('user: ' + this.user);
      },
      error => {
        console.log('Error happened: ' + error);
      },
      () => {
        console.log('the subscription is completed');
      }
    );
    // this.currentUser = currentUser$.subscribe;
  }

  ngOnInit() {
    // console.log('my User...' + this.myUser);
    // this.route.params.subscribe(
    //   params => (this.currentUser = this.db.object(`/currentUser/${params.id}`))
    //   // .valueChanges())
    //   // this.baseData = this.getData(`/currentUser/${params.id}`)
    // );
    // this.currentUser = this.getData(this.path);
    // console.log('My Current User : ' + this.currentUser.subscribe(obj => console.log));
    // console.log('baseData: ' + this.baseData);
  }

  // getData(objPath: string): AngularFireObject<any> {
  //   // console.log(this.db.object(objPath).valueChanges());
  //   return this.db.object(objPath);
  // }
}
