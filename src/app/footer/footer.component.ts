import { Component, OnInit } from '@angular/core';
import { Rorichar } from '../rorichar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currRorichar: Rorichar =
  {
   sid: 991484198, sname: 'Richard Roberts',
   scampus: 'Davis',
   sLogin: 'rorichar', sAssign: 'Assignment 3'
  };

  constructor() {}

  ngOnInit() {}

}
