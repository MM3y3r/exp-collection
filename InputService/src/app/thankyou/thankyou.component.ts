import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})

export class ThankyouComponent implements OnInit {

  UserID: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.UserID = this.route.snapshot.paramMap.get('id');
    console.log('myid: ' + this.UserID);

    // WHY IS THIS SO OBSCURE ? snapshots are easier...

    // console.log('we are in the component now... initil...')
    // this.route.paramMap
    //   .switchMap((params: ParamMap) => {
    //     console.log('inside parammap...')
    //     // (+) before `params.get()` turns the string into a number
    //     this.UserID = params.get('id');
    //     console.log('out id!!! : ' + this.UserID);
    //     return null;
    //   });
  }

  navigateToMyPage = () => {
    this.router.navigateByUrl(`https://expcollection-webclient.firebaseapp.com/home/${this.UserID}`);
  }

}
