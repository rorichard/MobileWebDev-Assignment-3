import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor() {
        //sname = "richard Roberts gg" 
        this.currRorichar = {
            sid: 991484198, sname: 'Richard Roberts',
            scampus: 'Davis',
            sLogin: 'rorichar', sAssign: 'Assignment 3'
        };
    }
    ngOnInit() {
    }
};
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map