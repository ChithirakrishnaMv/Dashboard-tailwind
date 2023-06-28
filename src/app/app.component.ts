import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DashboardTailwindUI';
  sidebar:boolean = true;
  sidebarToggle(){
    this.sidebar = !this.sidebar;
  }
}
