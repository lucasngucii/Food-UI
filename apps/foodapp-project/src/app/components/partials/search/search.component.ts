import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchItem: string = '';

  constructor(activativeRoute: ActivatedRoute, private router: Router) {
    activativeRoute.params.subscribe((params) => {
      // @ts-ignore
      if (params.searchItem) {
        // @ts-ignore
        this.searchItem = params.searchItem;
      }
    });
  }

  ngOnInit(): void {}

  searchName(term: string): void {
    if (term) {
      this.router.navigateByUrl(`/search/${term}`);
    } else {
      this.router.navigateByUrl(`/`);
    }
  }
}
