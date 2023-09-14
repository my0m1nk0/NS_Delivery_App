import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empy-screen',
  templateUrl: './empy-screen.component.html',
  styleUrls: ['./empy-screen.component.scss'],
})
export class EmpyScreenComponent  implements OnInit {
  @Input() title;
  @Input() image;

  constructor() { }

  ngOnInit() {}

}
