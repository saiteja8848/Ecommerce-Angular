import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/Category';
import { Product } from '../../model/Product';
import { Cart } from '../../model/Cart';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RestAPIService } from '../../services/rest-api.service';

export let cartProducts: Cart[] = [];
@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent implements OnInit {
  categorys: Category[] = [];
  products: Product[];
  public cart: Cart[] = [];
  public Product: Cart;
  public selectedProduct: Product;
  public show: boolean = false;
  public cartItem: Cart;

  constructor(
    private _snackBar: MatSnackBar,
    private httpClient: RestAPIService
  ) {}

  ngOnInit(): void {
    this.loadCategorysData();
    this.loadProductsData();
  }

  loadCategorysData() {
    this.httpClient
      .getCategorys()
      .subscribe(
        (response) => ((this.categorys = response), console.log(this.categorys))
      );
  }

  loadProductsData() {
    this.httpClient.getProducts().subscribe((response) => {
      this.products = response;
    });
    console.log(this.products);
  }

  //Cart Function --->Adding Product to the Cart
  addToCart(product: Product) {
    this.openSnackBar(product.name, 'added to cart');
    this.cartItem = new Cart(
      product.productId,
      product.name,
      product.price,
      product.counter,
      product.price * product.counter
    );
    this.httpClient.addProductToCart(this.cartItem);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  //Menu Bar Filter On the View
  select(name: string) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name == name) {
        this.selectedProduct = this.products[i];
        this.products.splice(i, 1);
        break;
      }
    }
    this.products.unshift(this.selectedProduct);
  }

  //+ button
  add(id: number): void {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].productId == id) {
        this.products[i].counter++;
      }
    }
  }

  //- button
  remove(id: number): void {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].productId == id) {
        if (this.products[i].counter != 0) this.products[i].counter--;
      }
    }
  }
}
