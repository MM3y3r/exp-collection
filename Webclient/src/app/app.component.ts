// THE UGLIEST FILE OF ALL TIMES. @TODO: CLEAN UP!!!

import { ParamMap, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';;
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

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
    // router.events.subscribe((val) => {
    //   // see also
    //   console.log(val instanceof NavigationEnd)
    // });

    router.events.subscribe( (event: Event) => {

      if (event instanceof NavigationStart) {
            //HACK: extract unique ID from route & add to navigation
    let getLocation = function(href) {
      let l = document.createElement("a");
      l.href = href;
      return l;
    };

    let l = getLocation(window.location.href);
    this.uniqueId = l.pathname.match(/\/([^/]*)$/)[1];
    console.log('my unique id @ onchanges: ' + this.uniqueId);
          console.log('FUCK YEA STARTING TO NAVIGATE!')
      }

      if (event instanceof NavigationEnd) {
            //HACK: extract unique ID from route & add to navigation
    let getLocation = function(href) {
      let l = document.createElement("a");
      l.href = href;
      return l;
    };

    let l = getLocation(window.location.href);
    this.uniqueId = l.pathname.match(/\/([^/]*)$/)[1];
    console.log('my unique id @ onchanges: ' + this.uniqueId);
          // Hide loading indicator
          console.log('THE END IS NEIGH!!')
      }

      if (event instanceof NavigationError) {
            //HACK: extract unique ID from route & add to navigation
    let getLocation = function(href) {
      let l = document.createElement("a");
      l.href = href;
      return l;
    };

    let l = getLocation(window.location.href);
    this.uniqueId = l.pathname.match(/\/([^/]*)$/)[1];
    console.log('my unique id @ onchanges: ' + this.uniqueId);
          // Hide loading indicator
          // Present error to user
          console.log(event.error);
      }
  });
  }
  ngOnInit() {


    // this.router.events.subscribe((event) => {
    //   console.log(event);
    // });
  //HACK: extract unique ID from route & add to navigation
  let getLocation = function(href) {
    let l = document.createElement("a");
    l.href = href;
    return l;
  };

  let l = getLocation(window.location.href);
  this.uniqueId = l.pathname.match(/\/([^/]*)$/)[1];
  console.log('my unique id: ' + this.uniqueId);
  }

  ngOnChanges(){


    //HACK: extract unique ID from route & add to navigation
    let getLocation = function(href) {
      let l = document.createElement("a");
      l.href = href;
      return l;
    };

    let l = getLocation(window.location.href);
    this.uniqueId = l.pathname.match(/\/([^/]*)$/)[1];
    console.log('my unique id @ onchanges: ' + this.uniqueId);
  }
}
