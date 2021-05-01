import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seminarie-details',
  templateUrl: './seminarie-details.component.html',
  styleUrls: ['./seminarie-details.component.css']
})
export class SeminarieDetailsComponent implements OnInit {
  pdfSrc: string = "../../assets/RCCU.pdf";
  constructor() { }

  ngOnInit(): void {
  }

}
