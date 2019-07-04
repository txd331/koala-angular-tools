import {Component} from '@angular/core';
import {KoalaAngularToolsService} from 'koala-angular-tools';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'tester';

    constructor(private kService: KoalaAngularToolsService) {
        this.title = this.title + kService.getTest();
    }
}
