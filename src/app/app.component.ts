import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  
})
export class AppComponent {
  title = 'my-practical2-app';

  constructor(private router:Router){}

  goToPage(pagename:string):void{
    this.router.navigate(['${pageName}']);
  }
}
