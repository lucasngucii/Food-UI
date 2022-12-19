import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/foods/food.service';
import { ActivatedRoute} from '@angular/router';
import { Food } from '../../../shared/models/foods/Food';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  food!: Food;
  // @ts-ignore
  constructor(private foodService: FoodService, private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      if (params.id) {
        this.food = foodService.getFoodById(params.id);
      }
    });
  }

  onBack(): void {}
  ngOnInit(): void {}
}
