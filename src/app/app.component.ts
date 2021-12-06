import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stats-frontend';

  didNotHitThis() {
    console.log('This should be uncovered code.');
  }
}
