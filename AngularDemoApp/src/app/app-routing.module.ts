import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './features/login/login-form/login-form.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { registroComponent } from './features/login/registro/registro.component';
import { welcomeComponent } from './features/main/welcome/welcome.component';
import { HallComponent } from './features/main/hall/hall.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['hall']);

const routes: Routes = [
  {
  path: '', component: welcomeComponent,
  canActivate: [AngularFireAuthGuard], 
  data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  { 
  path: 'hall', component: HallComponent,
  loadChildren: () => import('./features/main/main.module').then(m => m.MainModule)
  },
  { 
  path: 'login', component: LoginFormComponent,
  loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  },
  {
  path: 'registro', component: registroComponent,
  loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
