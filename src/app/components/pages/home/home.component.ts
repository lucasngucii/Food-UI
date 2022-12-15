import {Component, OnInit} from '@angular/core';
import {Food} from "../../../shared/models/foods/Food";
import {FoodService} from "../../../services/foods/food.service";
import { sample_foods } from 'src/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Food[] = []

  constructor(private foodService: FoodService) {
    this.foods = foodService.getAll();
  }

  ngOnInit(): void {
  }
  getAll(): Food[]{
    return sample_foods;
  }

}
