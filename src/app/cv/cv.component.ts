import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  pdfSrc: string = "../../assets/Curriculum_Vitae_Jarne_Meekers.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}
