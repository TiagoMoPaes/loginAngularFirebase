import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss']
})
export class HallComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goLogin(){
    this.router.navigate(['login']);
  }

}
