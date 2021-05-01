import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {
  pdfSrc: string = "../../assets/Jarne_Meekers_portfolio_I-Talent.pdf";
  constructor() { }

  ngOnInit(): void {
  }

}
