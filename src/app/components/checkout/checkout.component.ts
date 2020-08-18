import { Component, OnInit } from '@angular/core';
import { Cart } from '../../model/Cart';
import { RestAPIService } from '../../services/rest-api.service';

export class TableData {
  public position: number;
  public name: string;
  public price: number;
  public count: number;
  public totalPrice: number;
}

const ELEMENT_DATA: TableData[] = [];

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  cartStatus: boolean = false;
  displayedColumns: string[] = [
    'position',
    'name',
    'price',
    'count',
    'totalPrice',
  ];
  dataSource = ELEMENT_DATA;
  cartProducts: Cart[];
  tableRow: TableData;
  totalItemCount: number = 0;
  totalPrice: number = 0;

  constructor(private httpClient: RestAPIService) {}

  ngOnInit(): void {
    this.emptyCart();
    this.loadCartData();
  }

  loadCartData() {
    this.httpClient.getCart().subscribe((data) => {
      this.cartProducts = data;
      if (this.cartProducts.length > 0) {
        this.cartStatus = true;
        for (let i = 0; i < this.cartProducts.length; i++) {
          this.tableRow = {
            position: this.cartProducts[i].id,
            name: this.cartProducts[i].name,
            price: this.cartProducts[i].price,
            count: this.cartProducts[i].count,
            totalPrice: this.cartProducts[i].totalPrice,
          };
          this.totalItemCount += this.cartProducts[i].count;
          this.totalPrice += this.cartProducts[i].totalPrice;
          ELEMENT_DATA.unshift(this.tableRow);
        }
        //this.emptyCart();
      }
    });
  }

  emptyCart() {
    console.log('Emptying Cart');
    this.httpClient.deleteAllCartItems().subscribe(() => {
      console.log('deleted >>>>>');
    });
  }
}
