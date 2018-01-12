// Imports
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  baseData: Observable<any[]>;
  constructor(private db: AngularFireDatabase, private route: ActivatedRoute) {
    this.route.params.subscribe(params => console.log(params));
  }
  ngOnInit() {
    this.baseData = this.getData('/users');
  }
  getData(listPath): Observable<any[]> {
    //console.log(this.db.list(listPath).valueChanges());
    return this.db.list(listPath).valueChanges();
  }
}
