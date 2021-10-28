import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hall',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class welcomeComponent implements OnInit, AfterContentInit {
  userEmail: string;

  constructor(private router: Router, private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void{
    this.auth.authState.subscribe(user => {
      if(user && user.uid){
      this.userEmail = user.email;
      console.log(this.userEmail);
      }
    });
  }


  onLogout(){
    this.auth.signOut().then(() => this.router.navigate(['hall']));
  }

}
