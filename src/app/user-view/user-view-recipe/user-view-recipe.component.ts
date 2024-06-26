import { Component, Input } from '@angular/core';
import { GastromicService } from '../../gastromic.service';
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-view-recipe',
  standalone: true,
  imports: [],
  templateUrl: './user-view-recipe.component.html',
  styleUrl: './user-view-recipe.component.css'
})
export class UserViewRecipeComponent {

  @Input() recipes:any;

  id = '';

  constructor(
    private gastromicService: GastromicService,
    private router: Router
  ) 
  { 
    
    // this.gastromicService.fetchRecipes();

    // this.recipes = this.getRecipes();
    // console.log("RECIPESSSSSSS: ", this.getRecipes())
  }


  // getRecipes() {
  //   return this.gastromicService.getRecipes();
  // }

  getUserAvatar() {
    return this.gastromicService.getUserAvatar();
  }

   setRecipeId (id: string) {
     sessionStorage.setItem('recipe_id', id);
  
  }



  navigateToRecipe() {
    this.router.navigate(['/recipe']);
  }


}
