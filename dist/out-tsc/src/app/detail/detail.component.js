import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { allSongs } from '../mySongs';
let DetailComponent = class DetailComponent {
    //onSelect(song : Songs) : void {
    //   this.selectedSong = song;
    //}
    constructor() {
        this.mySongs = allSongs;
    }
    ngOnInit() {
        this.aSong(0);
    }
    aSong(index) {
        this.selectedSong
            = {
                gName: this.mySongs[index].gName,
                gArtist: this.mySongs[index].gArtist,
                gGenre: this.mySongs[index].gGenre,
                gYear: this.mySongs[index].gYear,
                gPicture: this.mySongs[index].gPicture,
            };
    }
};
DetailComponent = tslib_1.__decorate([
    Component({
        selector: 'app-detail',
        templateUrl: './detail.component.html',
        styleUrls: ['./detail.component.css']
    })
], DetailComponent);
export { DetailComponent };
//# sourceMappingURL=detail.component.js.map