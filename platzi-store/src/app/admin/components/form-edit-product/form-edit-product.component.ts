import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-form-edit-product',
  templateUrl: './form-edit-product.component.html',
  styleUrls: ['./form-edit-product.component.scss']
})
export class FormEditProductComponent implements OnInit {

  id!: string;
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productService.getProduct(this.id).subscribe(resultado => {
        this.form.patchValue(resultado);
      })
    });
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  get priceField(){
    return this.form.get('price');
  }

  saveProduct(event: Event){
    //el preventdefault prevendra que la pagina se recargue la pagina al envir el formulario
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productService.updateProduct(this.id, product).subscribe(resultado => {
        console.log("resultado de saveProduct: ", resultado);
        this.router.navigate(['./admin/products'])
      })
    }
  }
}
