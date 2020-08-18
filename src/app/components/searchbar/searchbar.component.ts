import { Component, OnInit } from '@angular/core';
import { DataObjectService } from '../../services/data-object.service';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
   searchInput:string='';
   products: Product[];
   public selectedProduct: Product;
   message:string;
 

  constructor(private dataServiceObject:DataObjectService) { }

  ngOnInit(): void {
      this.loadProductsData();
  }

 loadProductsData() {
    this.dataServiceObject.getProductsData().subscribe((response) => {
      this.products = response
    }
    );
  }

  search(){
    console.log(this.searchInput);
    console.log(this.products); 
  }


}
