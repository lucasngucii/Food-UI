import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/foods/Food';
import { FoodService } from '../../../services/foods/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    activativeRoute: ActivatedRoute
  ) {
    activativeRoute.params.subscribe((params) => {
      // @ts-ignore
      if (params.searchItem) {
        // @ts-ignore
        this.foods = this.foodService.getAllFoodByName(params.searchItem);
      } else if (params.tag) {
        this.foods = this.foodService.getAllFoodByTag(params.tag);
      } else {
        this.foods = foodService.getAll();
      }
    });
  }

  ngOnInit(): void {}
}
