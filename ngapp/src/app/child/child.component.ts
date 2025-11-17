import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input('content') content: any;
  @Input('states') states: any;
  trackByState(index: number, item: any) { return item; }
}
