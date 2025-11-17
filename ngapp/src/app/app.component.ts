import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngapp';
  constructor(private router: Router) {}
  content = 'Content from Parent';
  states = ['Tozeur', 'Tunis', 'Nabeul'];
  gotoLogin() {
    this.router.navigate(['/login']);
  }
  gotoContact() {
    this.router.navigate(['/contact/123']);
  }
}
