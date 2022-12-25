import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../shared/models/tags/Tag';
import { Food } from '../../../shared/models/foods/Food';
import { FoodService } from 'src/app/services/foods/food.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
})
export class TagComponent implements OnInit {
  tags?: Tag[];

  constructor(private foodService: FoodService) {
    this.tags = this.foodService.getAllTags();
  }

  ngOnInit(): void {}
}
