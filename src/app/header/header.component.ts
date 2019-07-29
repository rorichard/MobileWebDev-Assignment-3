import { Component, OnInit } from '@angular/core';
import { Rorichar } from '../rorichar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //sname = "richard Roberts gg" 
  
  currRorichar: Rorichar =
  {
   sid: 991484198, sname: 'Richard Roberts',
   scampus: 'Davis',
   sLogin: 'rorichar',sAssign: 'Assignment 3'
  };

  constructor() { }

  
  ngOnInit() {
    
    
    }
  }


