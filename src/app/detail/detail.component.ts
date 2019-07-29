import { Component, OnInit } from '@angular/core';
import { allSongs } from '../mySongs';
import { Songs } from '../songs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 
mySongs = allSongs;

selectedSong: Songs;

  constructor() { }

  ngOnInit() {
    this.aSong(0);
  }
  aSong(index){
    console.log("change");
    this.selectedSong 
    ={
     gName: this.mySongs[index].gName,
     gArtist: this.mySongs[index].gArtist,
     gGenre: this.mySongs[index].gGenre,
     gYear: this.mySongs[index].gYear,
     gPicture: this.mySongs[index].gPicture,
    }
  }

}
