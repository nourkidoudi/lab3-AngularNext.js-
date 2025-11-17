import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  id: any;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');
    });
  }
}
