import {Component, OnInit} from '@angular/core';
// import {FooLibService} from '../../../foo-lib/src/lib/foo-lib.service';
import {TestService} from './test.service';
import {KoalaAngularToolsService} from '../../../koala-angular-tools/src/lib/koala-angular-tools.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'foo-tester';

    constructor(private testService: KoalaAngularToolsService) {

    }

    ngOnInit() {
       this.title = this.title + this.testService.getTest();
    }
}
