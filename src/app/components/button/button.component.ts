import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input('name') name?: string;
  @Input('color') color?: string;
  @Input('bg') bg?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
