import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = [
    'id',
    'title',
    'price',
    'actions'
  ];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  
  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(resultado => {
      this.products = resultado;
      console.log(resultado);
    });
  }

  // el resultado en su api me devuelve solo un true o false
  deleteProduct(id: string){
    this.productsService.deleteProduct(id)
    .subscribe(resultado => {
      if (resultado) {        
        const index = this.products.findIndex(p => p.id === id);
        this.products.splice(index, 1);
        this.products = [...this.products];
        console.log(this.products);
      }
    })
  }

}
