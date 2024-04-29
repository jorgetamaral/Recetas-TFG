import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthGoogleService } from '../auth-google.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name: string = '';
  image: string = '';
  email: string = '';
  // auth = inject(AuthGoogleService);
  constructor(private auth: AuthGoogleService) {
    let user = sessionStorage.getItem('user');
    if (user) {
      let parsedUser = JSON.parse(user);
      if (parsedUser) {
        this.name = parsedUser.name;
        this.image = parsedUser.picture;
        this.email = parsedUser.email;
      }
    }
  }
  
  singOut(){
    sessionStorage.removeItem('user');
    this.auth.signOut();
  }
}
