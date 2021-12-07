import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stats-frontend';

  changeTitle() {
    console.log(this.title);
    this.title = 'new title';
  }
}
