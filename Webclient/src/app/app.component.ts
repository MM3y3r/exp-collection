import { ParamMap, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';;
import { Router } from '@angular/router';

// Helpers :
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myData: Array<any>;
  uniqueId: string;
  path: string;

  constructor(private http: Http, private route: ActivatedRoute, private router: Router) {
    // this.route.params.subscribe(params => (this.path = `/${params.id}`));
  }
  ngOnInit() {

    //HACK: extract unique ID from route & add to navigation
    let getLocation = function(href) {
      let l = document.createElement("a");
      l.href = href;
      return l;
    };
  let l = getLocation(window.location.href);
  this.uniqueId = l.pathname.match(/\/([^/]*)$/)[1];
  }
}
