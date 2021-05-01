import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onclick(link : string) {
    if (link == "facebook") {
      window.location.href = "https://www.facebook.com/jarne.meekers.5";
    } else if(link == 'linkedin') {
      window.location.href = "https://www.linkedin.com/in/jarne-meekers-975aa016b?originalSubdomain=be";
    } else {
      window.location.href = "mailto:jarne.meekers@student.pxl.be";
    }
  }

}
