import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productosOriginales: Product[] = [
    {
      "id": "1",
      "image": "assets/images/camiseta.png",
      "title": "edicion camiseta",
      "price": 20000,
      "description": "bla bla bla bla bla"
    },
    {
      "id": "2",
      "image": "assets/images/hoodie.png",
      "title": "Hoodie",
      "price": 5555,
      "description": "Edicion titulo"
    },
    {
      "id": "3",
      "image": "assets/images/mug.png",
      "title": "Mug",
      "price": 80000,
      "description": "bla bla bla bla bla"
    },
    {
      "id": "4",
      "title": "Pin Platzi",
      "image": "assets/images/pin.png",
      "price": 6500,
      "description": "Pin Platzi"
    },
    {
      "id": "5",
      "title": "Stickers",
      "image": "assets/images/stickers1.png",
      "price": 4500,
      "description": "Stickers Platzi"
    },
    {
      "id": "6",
      "title": "Stickers",
      "image": "assets/images/stickers2.png",
      "price": 4500,
      "description": "Stickers Platzi"
    }
  ]

  products: Product[] = [];

  constructor( private productsService: ProductsService ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  clickProduct(id: number): void{
    console.log('llego desde productComponent', id);
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe(resultado => {
      this.products = resultado;
    });
  }

}
