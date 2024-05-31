import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HomeComponent, FooterComponent, SignInComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit {
  title = 'Recetas_TFG';
  isShowHeaderFooter = true;

  constructor(private router: Router) {
    // Suscribirse al evento NavigationEnd
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Mostrar el encabezado y pie de página cuando la ruta cambia
      this.isShowHeaderFooter = true;
    });
  }

  // Cuando ha termiado de cargar el DOM, lo establecemos a true
  // esto fixea que cuando cambias la pestaña, se muestre o no bien.
  ngAfterViewInit() {
    setTimeout(() => {
      this.isShowHeaderFooter = true;
    }, 0);
  }


}
