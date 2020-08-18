import { Component, OnInit } from '@angular/core';
import { Cart } from '../../model/Cart';
import { DataObjectService } from '../../services/data-object.service';
import { Location } from '@angular/common';
import { RestAPIService } from '../../services/rest-api.service';

export class TableData {
  public position: number;
  public name: string;
  public price: number;
  public count: number;
  public totalPrice: number;
}

export const ELEMENT_DATA: TableData[] = [];

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts: Cart[];
  tableRow: TableData;
  public cartStatus: boolean = false;
  displayedColumns: string[] = [
    'position',
    'name',
    'price',
    'count',
    'totalPrice',
    'deleteButtons',
  ];
  dataSource = ELEMENT_DATA;

  constructor(private httpClient: RestAPIService) {}

  ngOnInit(): void {
    this.loadCartData();
    for (let i = 0; i < ELEMENT_DATA.length; i++) {
      ELEMENT_DATA.pop();
    }
    console.log('called cart');
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
          ELEMENT_DATA.unshift(this.tableRow);
        }
      }
    });
  }

  deleteProduct(id: number) {
    console.log('id:-' + id + ' Deleted Successfully');
    this.httpClient.deleteCartProduct(id).subscribe(() => {
      location.reload();
    });
  }
}
