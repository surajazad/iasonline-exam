import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Online Examination Portal';

  constructor(private router : Router){

  }
  redirectTo(){
    this.router.navigate(['question']);

  }
}
