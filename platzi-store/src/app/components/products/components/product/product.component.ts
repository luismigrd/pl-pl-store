import { Component,
   OnInit,
   Input,
   Output,
   EventEmitter,
   OnChanges,
   SimpleChanges,
   DoCheck,
   OnDestroy
} from '@angular/core';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {


  @Input() product: Product = {
    id: '',
    image: '',
    title: '',
    price: 0,
    description: ''
  };
  @Output() productClicked: EventEmitter<any> = new EventEmitter<any>();

  today = new Date();

  constructor() {
    console.log('1. constructor');
   }

  // ngOnChanges(change: SimpleChanges){
  //   console.log('2. ngOnChanges');
  //   console.log(change);
  // }

  ngOnInit(): void {
    console.log('3. ngOnInit');
  }

  ngDoCheck(): void {
    console.log('4. ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('5. ngOnDestroy');
  }

  addCart(): void{
    console.log('Añadir al carrito');
    this.productClicked.emit(this.product.id);
  }

}
