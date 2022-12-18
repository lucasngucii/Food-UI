import {Component, OnInit} from '@angular/core';
import {FoodService} from "../../../services/foods/food.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Food} from "../../../shared/models/foods/Food";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  food!: Food;
  // @ts-ignore
  constructor(private foodService: FoodService,
              private router: Router,
             private route: ActivatedRoute) {
                route.params.subscribe((params)=>{
                  if(params.id){
                    
                  }
                })
  }
  onBack(): void {}
  ngOnInit(): void {
  }

}
