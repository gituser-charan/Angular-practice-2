import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  work = 'practice session';
  myname = 'Charan Teja M';
  hideName = false;

  toggle(){
    this.hideName = !this.hideName;
  }
}
