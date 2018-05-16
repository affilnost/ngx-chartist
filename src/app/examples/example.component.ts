import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent implements OnInit {
  @Input() title;
  constructor() {
  }

  ngOnInit() {
  }

}
