import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Db, Product } from '../fakedata/Products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {

  selectedProduct: Product | undefined;
  imageBaseUrl: string = 'https://fakestoreapi.com/img/';
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    let productId = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.selectedProduct = Db.Products.find(product => product.id == productId);
    console.log(this.selectedProduct);

  }
}
