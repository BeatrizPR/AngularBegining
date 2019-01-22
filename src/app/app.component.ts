import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
      <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/products']">Product</a></li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `,
  // with <router-outlet> we indicate the page that the browser has to show
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  pageTitle: string = 'Acme Product Management';
}