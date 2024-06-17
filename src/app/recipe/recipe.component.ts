import { Component,Inject, OnInit } from '@angular/core';
import { GastromicService } from '../gastromic.service';
import { UserViewRecipeComponent } from '../user-view/user-view-recipe/user-view-recipe.component';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit {

  recipe_id:string = sessionStorage.getItem('recipe_id') || '';
  recipe : any;
  prueba:any;

  constructor(private GastromicService: GastromicService,
    @Inject(AppComponent) private userViewRecipeComponent: UserViewRecipeComponent
  ) { 
    let test = this.GastromicService.fetchRecipe(this.recipe_id)

    console.log("GET RECIPE: " , this.getRecipe());

   
  }

  ngOnInit() {
    
  }
  


  getRecipeID() {
    return this.recipe_id;
  }

  getRecipe() {
   return this.GastromicService.getRecipe();
  }

  getUserById() {
    // console.log("RECIPE: " + this.GastromicService.fetchUserById(this.getRecipe().user_created));

    return this.GastromicService.getUserById();
  }
}
