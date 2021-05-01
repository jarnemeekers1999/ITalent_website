import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seminarie-component',
  templateUrl: './seminarie.component.html',
  styleUrls: ['./seminarie.component.scss']
})
export class SeminarieComponent implements OnInit {
  pdfSrc: string;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(seminarie : string) {
    if (seminarie == "mendix"){
      this.pdfSrc = "../../assets/SeminarieMendix.pdf"
    }
    if (seminarie == "ericson"){
      this.pdfSrc = "../../assets/Ericsson.pdf"
    }
    if (seminarie == "gluo"){
      this.pdfSrc = "../../assets/Gluo.pdf"
    }
    if (seminarie == "fedpol"){
      this.pdfSrc = "../../assets/SeminarieRCCU.pdf"
    }
    
    //wacht ff kga ff da verder  doorlopen en dan doe ik da wel // cava pie! doe ma opt gemak!
  }

}
