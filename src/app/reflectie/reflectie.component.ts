import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reflectie',
  templateUrl: './reflectie.component.html',
  styleUrls: ['./reflectie.component.css']
})
export class ReflectieComponent implements OnInit {
  pdfSrc: string = "../../assets/X-factor.pdf";
  constructor() { }

  ngOnInit(): void {
  }

}
