import { ParamMap, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Helpers :
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myData: Array<any>;
  path: string;
  // @Input() currentPath: string;

  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => (this.path = `/${params.id}`));
    // console.log('@constructor path: ' + this.path);
    // this.http
    //   .get('http://api.icndb.com/jokes/random/20')
    //   .map(response => response.json())
    //   .subscribe(res => (this.myData = res));
  }
  ngOnInit() {
    console.log(this.route.snapshot.queryParamMap);
    // console.log('@oninit: ' + this.path);
  }
}
