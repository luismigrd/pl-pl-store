import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(  private route: ActivatedRoute,
                private productService: ProductsService ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string){
    this.productService.getProduct(id)
    .subscribe(resultado => {
      this.product = resultado;
    })
  }

  createProduct(){
    const newProduct: Product = {
      id: '222',
      title: 'Nuevo desde angular',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'nuevo producto'
    };

    this.productService.createProduct(newProduct)
    .subscribe(resultado => {
      console.log("resultado createProduct: ", resultado);
    });
  }

  updateProduct(){
    const updateProduct: Partial<Product> = {
      price: 5555,
      description: 'edicion descripcion'
    };

    this.productService.updateProduct('2', updateProduct)
    .subscribe(resultado => {
      console.log("resultado updateProduct: ", resultado);
    });
  }

  deleteProduct(){
    this.productService.deleteProduct('2')
    .subscribe(resultado => {
      console.log("resultado deleteProduct: ", resultado);
    });
  }

}
