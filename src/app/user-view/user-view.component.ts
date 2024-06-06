import { Component,  } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ModalAccessProhibitedComponent } from '../modal-access-prohibited/modal-access-prohibited.component';
import { CommonModule } from '@angular/common';
import { UserViewRecipeComponent } from './user-view-recipe/user-view-recipe.component';
import { RecipeCreateComponent } from '../recipe-create/recipe-create.component';

@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [RouterLink, ModalAccessProhibitedComponent, CommonModule, UserViewRecipeComponent, RecipeCreateComponent],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent {
  logged: boolean = false;
  myprofile: boolean = true;
  following: boolean = false;
  tabSeleccionada = 'publicaciones';
  botonDeshabilitado = true;

  constructor(private router: Router) { }

  isLoged() {
    return this.logged == true ? true : false;
  }

  isFollowing(){
    return this.following == true ? 'Siguiendo' : 'Seguir';
  }

  isMyProfile(){
    return this.myprofile == true ? true : false;
  }

  cambiarContenido(tab: string) {
      this.tabSeleccionada = tab;
  }

  // Funcion que redirige a sign-in, de esta forma la opacidad del modal se quita
  onButtonClick() {
    setTimeout(() => {
      this.router.navigate(['/sign-in']);
    }, 0);
  }
}
