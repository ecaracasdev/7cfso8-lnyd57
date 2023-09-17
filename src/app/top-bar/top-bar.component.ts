import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard'; 

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  constructor(private router: Router, public authGuard: AuthGuard) {}

  logout() {
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']);
  }
}
