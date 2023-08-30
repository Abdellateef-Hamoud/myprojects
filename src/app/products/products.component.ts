import { Component } from '@angular/core';
import { Db, Product } from '../fakedata/Products';

@Component({
  selector: 'app-movies',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class MoviesComponent {
  searchValue: string = 'ali';
  toggleData: boolean = true;
  imageBaseUrl: string = 'https://fakestoreapi.com/img/';
  allProducts: Product[] = Db.Products;
  

  constructor() {}

  // toggleDescription(productId: number) {
  //   for (const product of this.allProducts) {
  //     if (product.id == productId) {
  //       // product.showDetails = !product.showDetails;
  //     }
  //   }
  //   // this.toggleData=!this.toggleData;
  // }
}
